(ns server.core
  (:require [org.httpkit.server :as hk-server])
  (:gen-class))


(defn app
  ""
  [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "hello HTTP!"})

(defonce server (atom nil))

(defn start
  ""
  []
  (reset! server
          (hk-server/run-server app
                                {:port 8080
                                 :legacy-return-value? false})))

(defn stop
  ""
  []
  (when-not (nil? @server)
    (hk-server/server-stop! @server {:timeout 100})
    (reset! server nil)))

(defn print-port
  ""
  []
  (if (nil? @server)
    (println "server is not running...")
    (println (format "server port is %d" (hk-server/server-port @server))))
  )
  

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Start Server!")
  (start))
