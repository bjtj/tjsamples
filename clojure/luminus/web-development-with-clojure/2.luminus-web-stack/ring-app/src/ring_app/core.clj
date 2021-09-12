(ns ring-app.core
  (:require
   [reitit.ring :as reitit]
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

;; (def routes
;;   [["/" {:get html-handler
;;          :post html-handler}]])

;; (def routes
;;   [["/"  html-handler]])

(def routes
  [["/" html-handler]
   ["/echo/:id"
    {:get
     (fn [{{:keys [id]} :path-params}]
       (response/ok (str "<p>the value is: " id "</p>")))}]
   ["/api" {:middleware [wrap-formats]}
    ["/multiply"
     {:post
      (fn [{{:keys [a b]} :body-params}]
        (response/ok {:result (* a b)}))}]]])

;; $ curl -H "Content-Type: application/json" -X POST -d '{"a": 3, "b": 2}' localhost:3000/api/multiply
;; {"result":6}

(def handler
  (reitit/ring-handler
   (reitit/router routes)
   (reitit/create-resource-handler {:path "/"})
   (reitit/create-default-handler
    {:not-found
     (constantly (response/not-found "404 - Page not found"))
     :method-not-allowed
     (constantly (response/method-not-allowed "405 - Not allowed"))
     :not-acceptable
     (constantly (response/not-acceptable "406 - Not acceptable"))})))

;; $ curl localhost:3000/foo
;; 404 - Page not found

(defn -main
  ""
  []
  (jetty/run-jetty
   (-> #'handler
       wrap-nocache
       wrap-reload)
   {:port 3000
    :join? false}))
