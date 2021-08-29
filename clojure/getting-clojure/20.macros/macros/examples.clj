(defn print-rating
  ""
  [rating]
  (cond
    (pos? rating) (println "Good book!")
    (zero? rating) (println "Totally indifferent.")
    :else (println "Run away!")
    ))


(defn arithmetic-if
  ""
  [n pos zero neg]
  (cond
    (pos? n) pos
    (zero? n) zero
    (neg? n) neg
    ))

(arithmetic-if 0 :great :meh :boring)

(defn print-rating
  ""
  [rating]
  (arithmetic-if rating
                 (println "Good book!")
                 (println "Totally indifferent.")
                 (println "Run away!")
                 ))

(print-rating 10)                       ; Good book!
                                        ; Totally indifferent.
                                        ; Run away!

;; -------------------------------------------------

(defn arithmetic-if
  ""
  [n pos-f zero-f neg-f]
  (cond
    (pos? n) (pos-f)
    (zero? n) (zero-f)
    (neg? n) (neg-f)
    ))

(defn print-rating
  ""
  [rating]
  (arithmetic-if rating
                 #(println "Good book!")
                 #(println "Totally indifferent.")
                 #(println "Run away!")
                 ))


;; -------------------------------------------------
;; Macros to the Rescue

;; (arithmetic-if rating
;;                (println "Good book!")
;;                (println "Totally indifferent.")
;;                (println "Run away!"))

(defn arithmetic-if->cond
  ""
  [n pos zero neg]
  (list 'cond (list 'pos? n) pos
        (list 'zero? n) zero
        :else neg))


(arithmetic-if->cond 'rating
                     '(println "Good book!")
                     '(println "Totally indifferent.")
                     '(println "Run away!"))


(defmacro arithmetic-if
  ""
  [n pos zero neg]
  (list 'cond (list 'pos? n) pos
        (list 'zero? n) zero
        :else neg))

;; (arithmetic-if rating :loved-it :meh :hated-it)

;; will get turned into this before it's compiled.

;; (cond (pos? rating) :loved-it (zero? rating) :meh :else hated-it)



;; -------------------------------------------------
;; Easier Macros with Syntax Quoting

(defmacro arithmetic-if
  ""
  [n pos zero neg]
  (list 'cond (list 'pos? n) pos
        (list 'zero? n) zero
        :else neg))


;; Notice the backquote character at the start.

`(:a :syntax "quoted" :list 1 2 3 4)

;; Set up some values.

(def n 100)
(def pos "It's positive!")
(def zero "It's zero!")
(def neg "It's negative")

;; And plug them in the cond.

`(cond
   (pos? ~n) ~pos
   (zero? ~n) ~zero
   :else ~neg)                          ; (clojure.core/cond (clojure.core/pos? 100) "It's positive!" (clojure.core/zero? 100) "It's zero!" :else "It's negative")

(defmacro when
  ""
  [test & body]
  (list 'if test (cons 'do body)))

(defmacro cond
  ""
  [& clauses]
  (when clauses
    (list 'if (first clauses)
          (if (next clauses)
            (second clauses)
            (throw (IllegalArgumentException.
                    "cond requies an even number of forms")))
          (cons 'clojure.core/cond (next (next clauses))))))


;; (defmacro and
;;   ([] true)
;;   ([x] x)
;;   ([x & next])
;;   `(let [and# ~x]
;;      (if and# (and ~@next) and#)))
