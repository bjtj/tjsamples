(ns expressjs.server.core
  (:require [expressjs.server.config :as config]
            ["express" :as express]))

(defonce server (atom nil))
(def port 3000)

(prn :env config/env)

(defn template
  "template"
  [content]
  (str "<!DOCTYPE html><html><head><title>Hello</title></head><body>" content "</body></html>"))

(defn start
  "start"
  []
  (if @server
    (println "Already started...")
    (let [app (express)]
      (.get app "/" (fn [req res]
                      (.send res (template "Hello from CLJS + Express.js..."))))
      (reset! server (.listen app port
                              (fn []
                                (println (str "Server is running on http://localhost:" port))))))))

(defn stop
  "stop"
  []
  (when-let [s @server]
    (println "Stop server...")
    (.close s)
    (reset! server nil)))

(defn ^:dev/after-load reload!
  "reload!"
  []
  (stop)
  (start))

(defn -main
  []
  (start))
