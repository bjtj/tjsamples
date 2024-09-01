(ns my-project.main
  (:require [medley.core :as m]))

(defn -main
  "main!"
  [& _args]
  (prn (m/index-by :id [{:id 1} {:id 2}])))
