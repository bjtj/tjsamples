(ns hello.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :refer [response content-type]]
            [reitit.ring :as ring]))


(defn handler [request]
  (-> (response "Hello World")
      (content-type "text/plain")))

;; (defn handler [_]
;;   {:status 200, :body "ok"})

(defn ping [request]
  {:status 200
   :body "pong"})

(def router
  (ring/router
   [["/" {:get handler}]
    ["/ping" {:get ping}]]))

(def app
  (ring/ring-handler router))

(defn -main [& args]
  (run-jetty app {:port 8080}))
