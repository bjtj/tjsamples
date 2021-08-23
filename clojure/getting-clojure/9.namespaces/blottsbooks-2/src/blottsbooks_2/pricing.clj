(ns blottsbooks-2.pricing)

(def discount-rate 0.15)

(defn compute-discount-price
  ""
  [book]
  (- (:price book)
     (* discount-rate (:price book))))
