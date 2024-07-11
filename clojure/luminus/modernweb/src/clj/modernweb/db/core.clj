(ns modernweb.db.core
  (:require
    [xtdb.api :as xt]
    [mount.core :refer [defstate]]
    [modernweb.config :refer [env]])
  (:import (java.util UUID)))

(defstate node
  :start (doto (xt/start-node (:xtdb-config env))
           xt/sync)
  :stop (-> node .close))

(defn- put-user!
  [node user]
  (let [user-doc (assoc user :xt/id (:user/id user)
                             :modernweb/type :user)]
    (xt/await-tx
      node
      (xt/submit-tx node [[::xt/put user-doc]]))))

(defn delete-user!
  [node id]
  (xt/await-tx
   node
   (xt/submit-tx node [[::xt/delete id]])))

(defn- remove-type-and-xtdb-id
  [user-doc]
  (dissoc user-doc :modernweb/type :xt/id))

(defn create-user!
  "e.g.
    (create-user! node {:user/email \"test@example.com\"
                        :user/name \"Example user\"})"
  [node user]
  (let [user-with-id (assoc user :user/id (UUID/randomUUID))]
    (put-user! node user-with-id)
    user-with-id))

(defn update-user!
  [node user]
  (put-user! node user))

(defn find-user-by-attribute
  [node attr value]
  (-> (xt/q
        (xt/db node)
        {:find  '[(pull user [*])]
         :where [['user attr 'value]
                 ['user :modernweb/type :user]]
         :in    '[attr value]}
        attr value)
      ffirst
      remove-type-and-xtdb-id))

(defn find-user-by-id
  [node id]
  (find-user-by-attribute node :user/id id))

(defn find-all-users
  ""
  [node]
  (->> (xt/q
        (xt/db node)
        {:find  '[(pull user [*])]
         :where [['user :modernweb/type :user]
                 ['user :user/name ]]})
       (map (fn [item] (-> item first remove-type-and-xtdb-id)))
      ))
