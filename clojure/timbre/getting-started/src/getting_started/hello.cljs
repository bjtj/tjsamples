(ns getting-started.hello
  (:gen-class)
  (:require [taoensso.timbre :as timbre
             ;; Optional, just refer what you like:
             :refer [log  trace  debug  info  warn  error  fatal  report
                     logf tracef debugf infof warnf errorf fatalf reportf
                     spy]]))

(defn basic
  "https://github.com/taoensso/timbre/wiki/1-Getting-started"
  []

  (println "basic!")
  
  (info "This will print") ;; => nil
  ;; 15-Jun-13 19:18:33 localhost INFO [my-app.core] - This will print

  (spy :info (* 5 4 3 2 1)) ;; => 120
  ;; 15-Jun-13 19:19:13 localhost INFO [my-app.core] - (* 5 4 3 2 1) => 120

  ;; (defn my-mult [x y] (info "Lexical env:" (get-env)) (* x y)) ;; => #'my-mult
  ;; (my-mult 4 7) ;; => 28
  ;; 15-Jun-13 19:21:53 localhost INFO [my-app.core] - Lexical env: {x 4, y 7}

  (trace "This won't print due to insufficient log level") ;; => nil
  )

