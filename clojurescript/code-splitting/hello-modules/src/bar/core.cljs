(ns bar.core
  (:require [cljs.loader :as loader]))


(println "I'm bar!")

(defn woz
  ""
  []
  (println "WOZ!"))

(loader/set-loaded! :bar)
