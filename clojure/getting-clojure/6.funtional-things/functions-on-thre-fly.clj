(fn [n]
  (* 2 n))

(println "A function:" (fn [n] (* 2 n)))

(def double-it (fn [n]
                 (* 2 n)))

(double-it 10)

((fn [n]
   (* 2 n)) 10)

(fn [book]
  (when (<= (:price book) 9.99)
    book))
