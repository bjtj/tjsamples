(ns quickstart.explains
  (:require [malli.core :as m]
            [clojure.pprint :refer [pprint] :rename {pprint pp}]
            [quickstart.schemas :as schemas]))

(defn explain1
  [opts]
  (pp
   (m/explain
    [:* [:catn [:prop string?] [:val [:altn [:s string?] [:b boolean?]]]]]
    ["-server" "foo" "-verbose" 11 "-user" "joe"])))

(defn explain2
  [opts]
  (pp
   (m/explain
    [:* [:cat string? [:alt string? boolean?]]]
    ["-server" "foo" "-verbose" 11 "-user" "joe"])))

(defn explain3
  [opts]
  (pp
   (m/explain
    schemas/Address
    {:id "Lillan"
     :tags #{:artesan :coffee :hotel}
     :address {:street "Ahlmanintie 29"
               :city "Tampere"
               :zip 33100
               :lonlat [61.4858322, 23.7854658]}}))

  (pp
   (m/explain
    schemas/Address
    {:id "Lillan"
     :tags #{:artesan "coffee" :garden}
     :address {:street "Ahlmanintie 29"
               :zip 33100
               :lonlat [61.4858322, nil]}})))
