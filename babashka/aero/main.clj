#!/usr/bin/env bb

;;; e.g.) DEBUG=true DATABASE_HOST=localhost DATABASE_NAME=default bb main.clj 

(require '[aero.core :refer [read-config]]
         '[clojure.pprint :as pprint])

(println "== read-config ==")
(pprint/pprint (read-config "config.edn"))

(println "== read-config(profile: prod) ==")
(pprint/pprint (read-config "config.edn" {:profile :prod}))


