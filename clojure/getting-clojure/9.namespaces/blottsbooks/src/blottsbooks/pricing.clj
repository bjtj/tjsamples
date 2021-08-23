(ns blottsbooks.pricing)

(def discount-rate 0.15)

(defn discount-price
  ""
  [book]
  (- (:price book)
     (* discount-rate (:price book))))
