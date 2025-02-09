(ns clojure.clojure
  (:require [next.jdbc :as jdbc])
  (:gen-class))

(def config
  {:dbtype "postgresql"
   :dbname "mytest"
   :host "localhost"
   :user "test"
   :password "test"})

(def db (jdbc/get-datasource config))

(defn greet
  []
  (prn :greet (jdbc/execute! db ["select '안녕?'"])))

(defn -main
  [& args]
  (greet))
