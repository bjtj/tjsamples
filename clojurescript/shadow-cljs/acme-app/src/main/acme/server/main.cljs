(ns acme.server.main
  (:require [express]))

(defonce app (express))

(.get app "/" (fn [_ res]
                (.send res "Hello from ClojureScript!")))

(defonce server (atom nil))

(defn start
  []
  (when @server
    (println "Stopping server...")
    (.close @server))
  (reset! server (.listen app 3000
                          (fn [] (println "Server running at http://localhost:3000")))))

(defn hello
  []
  (js/console.log "Hello"))

(defn reload!
  []
  (println "-- CODE UPDATED --")
  (start))

(defn main!
  []
  (println "-- APP LOADED! --")
  (start))
