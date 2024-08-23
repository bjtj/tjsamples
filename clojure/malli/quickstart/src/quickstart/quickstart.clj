(ns quickstart.quickstart
  (:gen-class)
  (:require [malli.core :as m]
            [malli.generator :as mg]
            [clojure.pprint :refer [pprint]]))

(def UserId :string)

(def Address
  [:map
   [:street :string]
   [:country [:enum "FI" "UA"]]])

(def User
  [:map
   [:id #'UserId]
   [:address #'Address]
   [:friends [:set {:gen/max 2} [:ref #'User]]]])

(defn quickstart
  "quickstart"
  [opts]
  (let [item (mg/generate User)]
    (pprint item)
    (pprint (m/validate User item))))

(defn -main
  "main"
  [& args]
  (quickstart {}))
