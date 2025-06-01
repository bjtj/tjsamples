(ns hello-deps.hello-deps
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :as res]
            [reitit.ring :as ring]))

(defn handler [request]
  (-> (res/response "<html><body>Hello World!</body></html>")
      (res/content-type "text/html")))

(defn ping [request]
  {:status 200
   :body "pong"})

(def router
  (ring/router
   [["/" {:get handler}]
    ["/ping" {:get ping}]]))

(def app
  (ring/ring-handler
   router
   (ring/routes
    (ring/create-resource-handler {:path "/"}))))

(defonce server (atom nil))

(defn start
  []
  (if @server
    (prn :server-is-already-started)
    (reset! server (run-jetty app {:port 3000 :join? false}))))

(defn stop
  []
  (if (nil? @server)
    (prn :server-is-not-running)
    (do
      (.stop @server)
      (reset! server nil))))

(defn restart
  []
  (stop)
  (start))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (start))
