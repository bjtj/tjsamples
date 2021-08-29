;; Just some data: Note the quote.

'(helvetica times-roman [comic-sans]
            (futura gil-sans
                    (courier "All the fonts I have loved!")))


;; Still just data -- note the quote.

'(defn print-greeting [preferred-customer]
   (if preferred-customer
     (println "Welcome back!")))

;; Now this is code!

(defn print-greeting
  ""
  [preferred-customer]
  (if preferred-customer
      (println "Welcome back!")
      )
)


;; Reading and Evaluating

(defn print-greeting
  ""
  [preferred-customer]
  (if preferred-customer
    (println "Welcome back!")
      )
)

;; A complicated string with some escaped quotes.

(def s
  "(defn print-greeting [preferred-customer] (if preferred-customer (println \"Welcome back!\")))")

;; A four-element list

(read-string s)

;; A three element list.
(def a-data-structure '(+ 2 2))

;; The number 4.

(eval a-data-structure)


;; -----------------------------

(def some-data
  '(defn print-greeting [preferred-customer]
     (if preferred-customer (println "Welcome back!"))))

;; At this point we have some-data defiend,
;; but not the print-greeting function.
;; Now let's eval some-data...

(eval some-data)

;; And now print-greeting is defined!

(print-greeting true)


;; -----------------------------

(eval 55)                               ; Returns the number after 54.
(eval :hello)                           ; Returns the keyword :hello
(eval "hello")                          ; And a string.


;; -----------------------------


(def title "For Whom the Bell Tolls")

;; Get hold of the unevaluated symbol 'title...

(def the-symbol 'title)

(eval the-symbol)

;; While a list gets evaluated as a function call

(eval '(count title))


;; -----------------------------

(def fn-name 'print-greeting)
(def args (vector 'preferred-customer))
(def the-println (list 'println "Welcome back!"))
(def body (list 'if 'preferred-customer the-println))

(eval (list 'defn fn-name args body))

(eval (list 'print-greeting true))


;; -----------------------------
;; The Homoiconic Advantage

(ns codetool.core
  (:require [clojure.java.io :as io]))

(defn read-source
  ""
  [path]
  (with-open [r (java.io.PushbackReader. (io/reader path))]
    (loop [result []]
      (let [expr (read r false :eof)]
        (if (= expr :eof)
            result
            (recur (conj result expr)))))))


(defn russ-repl
  ""
  []
  (loop []
    (println (eval (read)))
    (recur)))

;; -----------------------------
;; An Eval of Your Own

(defn reval
  ""
  [expr]
  (cond
    (string? expr) expr
    (keyword? expr) expr
    (number? expr) expr
    :else :completely-confused
    ))

(defn eval-symbol
  ""
  [expr]
  (.get (ns-resolve *ns* expr)))

(defn eval-vector
  ""
  [expr]
  (vec (map reval expr)))

(defn eval-list
  ""
  [expr]
  (let [evaled-items (map reval expr)
        f (first evaled-items)
        args (rest evaled-items)]
    (apply f args)
    )
)

(defn reval
  ""
  [expr]
  (cond
    (string? expr) expr
    (keyword? expr) expr
    (number? expr) expr
    (symbol? expr) (eval-symbol expr)
    (vector? expr) (eval-vector expr)
    (list? expr) (eval-list expr)
    :else :completely-confused
    ))

;; -----------------------------

(def books1 (with-meta ["Emma" "1984"] {:favorite-books true}))

(def books1 ^:favorite-books ["Emma" "1984"])

;; Gives you the {:favorite-books true} map.

(meta books1)

;; Otherwise identical vectors with different metadata...

(def books2 (with-meta ["Emma" "1984"] {:favorite-books true}))

(def books3 (with-meta ["Emma" "1984"] {:favorite-books false}))

;; Are still equal.

(= books2 books3)                       ; True!

(defn add2
  "Return the sum of two numbers"
  [a b]
  (+ a b))

(meta #'add2)                           ; {:arglists ([a b]), :doc "Return the sum of two numbers", :line 194, :column 1, :file "tjsamples/clojure/getting-clojure/19.read-and-eval/read/examples.clj", :name add2, :ns #namespace[codetool.core]}

(def md (meta books3))

;; Do mapish things to the metadata

(count md)                              ; 1
(vals md)                               ; (false)
