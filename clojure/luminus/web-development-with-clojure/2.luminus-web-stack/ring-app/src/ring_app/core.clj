(ns ring-app.core
  (:require
   [muuntaja.middleware :as muuntaja]
   [ring.adapter.jetty :as jetty]
   [ring.util.http-response :as response]
   [ring.middleware.reload :refer [wrap-reload]]))

(defn html-handler
  ""
  [request-map]
  (response/ok
   (str "<html> your IP is: "
        (:remote-addr request-map)
        "</body></html>")))

(defn json-handler
  ""
  [request]
  (response/ok
   {:result (get-in request [:body-params :id])}))

(def handler json-handler)

(defn wrap-nocache
  ""
  [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(defn wrap-formats
  ""
  [handler]
  (-> handler
      (muuntaja/wrap-format)))

(defn -main
  ""
  []
  (jetty/run-jetty
   (-> #'handler
       wrap-nocache
       wrap-formats
       wrap-reload)
   {:port 3000
    :join? false}))
