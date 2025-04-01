(ns hello-world.core
  (:require react-dom))

(println "Hello world!")

;; ADDED
(defn average [a b]
  (/ (+ a b) 2.0))

(.render js/ReactDOM
         (.createElement js/React "h2" nil "Hello, React!")
         (.getElementById js/document "app"))
