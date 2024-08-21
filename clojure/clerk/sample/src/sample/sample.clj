(ns sample.sample
  (:gen-class)
  (:require [nextjournal.clerk :as clerk]))

(defn start
  "start clerk"
  [opts]
  (clerk/serve! (merge {:browse true
                        :watch-paths ["notebooks"]
                        :index "index.clj"
                        :paths ["notebooks/*.clj"]} opts)))

(defn -main
  "main"
  [& args]
  (start {})
  (println "hello"))
