(ns guestbook.messages
  (:require [guestbook.db.core :as db]
            [conman.core :as conman]
            [guestbook.validation :refer [validate-message]]))

(defn message-list
  ""
  []
  {:messages (vec (db/get-messages))})

(defn save-message!
  ""
  [{{:keys [display-name]} :profile
    :keys [login]}
   message]
  (if-let [errors (validate-message message)]
    (throw (ex-info "Message is invalid"
                    {:guestbook/error-id :validation
                     :errors errors}))
    (let [tags (map second
                    (re-seq #"(?<=\s|^)#([-\w]+)(?=\s|$)"
                            (:message message)))]
      (conman/with-transaction [db/*db*]
        (let [post-id (:id
                       (db/save-message! db/*db*
                                         (assoc message
                                                :author login
                                                :name (or display-name login)
                                                :parent (:parent message))))]
          (db/get-timeline-post db/*db* {:post post-id
                                         :user login
                                         :is_boost false}))))))

(defn messages-by-author
  ""
  [author]
  {:messages (vec (db/get-messages-by-author {:author author}))})

(defn get-message
  ""
  [post-id]
  (db/get-message {:id post-id}))

(defn boost-message
  ""
  [{{:keys [display-name]} :profile
    :keys [login]} post-id poster]
  (conman/with-transaction [db/*db*]
    (db/boost-post! db/*db* {:post post-id
                             :poster poster
                             :user login})
    (db/get-timeline-post db/*db* {:post post-id
                                   :user login
                                   :is_boost true})))

(defn timeline
  ""
  []
  {:messages (vec (db/get-timeline))})

(defn timeline-for-poster
  ""
  [poster]
  {:messages (vec (db/get-timeline-for-poster {:poster poster}))})
