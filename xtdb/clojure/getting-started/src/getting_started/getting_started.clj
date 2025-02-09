(ns getting-started.getting-started
  (:require [xtdb.api :as xt])
  (:gen-class))

(def node (xt/start-node {}))

(def manifest
  {:xt/id :manifest
   :pilot-name "Johanna"
   :id/rocket "SB002-sol"
   :id/employee "22910x2"
   :badges "SETUP"
   :cargo ["stereo" "gold fish" "slippers" "secret note"]})

(defn -main
  [& args]
  (prn :node node)
  (xt/submit-tx node [[::xt/put manifest]])
  (->> (xt/sync node)
       (prn :sync))
  (->> (xt/entity (xt/db node) :manifest)
       (prn :manifest)))
