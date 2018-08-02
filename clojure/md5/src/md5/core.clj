(ns md5.core
  (:require [digest]))

(defn -main [& args]
  (println (digest/md5 "abc")))
