(ns blottsbooks.core
  ;; (:require blottsbooks.pricing)
  (:require [blottsbooks.pricing :as pricing])
  (:gen-class))

(require '[blottsbooks.pricing :refer [discount-price]])

(defn -main
  []
  (println "Current ns:" *ns*)
  ;; (find-ns 'user) ; Get the namespace called 'user.
  ;; (ns-map (find-ns 'user)) ; Includes all the predefined vars.
  (println
   ;; (blottsbooks.pricing/discount-price
   ;; (pricing/discount-price
   (discount-price
    {:title "Emma" :price 9.99})))
