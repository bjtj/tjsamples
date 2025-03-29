(ns acme.frontend.app)

(defn hello
  []
  (js/alert "Hello"))

(defn init
  []
  (println "Hello World!")
  (set! (.-innerHTML (.getElementById js/document "root")) "Hello World!"))

(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:dev/after-load start []
  (js/console.log "start")
  (-> js/window
      .-location
      .reload))
