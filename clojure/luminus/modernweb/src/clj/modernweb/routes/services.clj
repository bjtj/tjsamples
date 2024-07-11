(ns modernweb.routes.services
  (:require [modernweb.db.core :as db]
            [modernweb.middleware :as middleware]
            [modernweb.middleware.formats :as formats]
            [reitit.ring.coercion :as coercion]
            [reitit.coercion.schema]
            [reitit.coercion.spec :as spec-coercion]
            [muuntaja.core :as m]
            [clojure.tools.logging :as log]
            [reitit.ring.middleware.dev :as dev]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.multipart :as multipart]
            [reitit.ring.middleware.parameters :as parameters]
            [ring.util.http-response :as response])
  (:import (java.util UUID)))

(defn- nsmap->map
  ""
  [m]
  (reduce-kv (fn [m k v]
               (assoc m (keyword (name k)) v))
             {} m))

(defn- map->nsmap
  ""
  [m ns]
  (reduce-kv (fn [m k v]
               (assoc m (keyword ns (name k)) v))
             {} m))

(def json->user #(map->nsmap % "user"))
(def user->json nsmap->map)


(defn service-routes []
  [""
   {:reitit.middleware/transform dev/print-request-diffs
    :coercion reitit.coercion.schema/coercion
    :muuntaja formats/instance
    :middleware [
                 parameters/parameters-middleware
                 muuntaja/format-negotiate-middleware
                 muuntaja/format-response-middleware
                 exception/exception-middleware
                 muuntaja/format-request-middleware
                 coercion/coerce-response-middleware
                 coercion/coerce-request-middleware
                 multipart/multipart-middleware
                 ]}
   ["/echo"
    {:post (fn [{:keys [body-params]}]
             (response/ok
              {:body body-params}))}]

   ["/users"
    [""
     {:get {:summary "Get All Users"
            :handler (fn [{[] :parameters}]
                       (let [users (db/find-all-users db/node)]
                         (response/ok
                          {:users (map user->json users)})))}

      :post {:summary "Create a New User"
             :handler (fn [{user :body-params}]
                        (log/info (str "create a new user - " user))
                        (let [user-with-id (db/create-user! db/node (json->user user))]
                          {:status 201 :body {:created (user->json user-with-id)}}))}}]
    ["/:id"
     {:get {:summary "Get a User"
            :handler (fn [{{:keys [id]} :path-params}]
                       (if-let [user (db/find-user-by-id db/node (UUID/fromString id))]
                         (response/ok
                          {:found (user->json user)})
                         {:status 404 :body {:message "User not found"}}))}
      :delete {:summary "Delete a User"
               :handler (fn [{{:keys [id]} :path-params}]
                          (if-let [user (db/delete-user! db/node (UUID/fromString id))]
                            (response/ok
                             {:deleted {:id id}})
                            {:status 404 :body {:message "User not found"}}))}}]
    ]])
