(ns swagger.core
  (:require [ring.swagger.swagger2 :as rs]))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))


(rs/swagger-json {})
