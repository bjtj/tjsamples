(defn print-greeting
  ""
  [preferred-customer]
  (if preferred-customer
    (println "Welcome back to Blotts Books!")
    )
  )


(defn print-greeting
  ""
  [preferred-customer]
  (if preferred-customer
    (println "Welcome back to Blotts Books!")
    (println "Welcome to Blotts Books!")
    )
  )

(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (if preferred-customer
    0.00
    (* order-amount 0.10))
  )



;;

(= 1 1)                                 ; true
(= 2 (+ 1 1))                           ; true
(= "Anna Karenina" "Jane Eyre")         ; false
(= "Emma" "Emma")                       ; true

(= (+ 2 2) 4 (/ 40 10) (* 2 2) (- 5 1)) ; true
(= 2 2 2 2 3 2 2 2 2 2)                 ; false, There's a 3 in there.

(not= "Anna Karenina" "Jane Eyre")      ; true
(not= "Anna Karenina" "Anna Karenina")  ; false


(number? 1984)                          ; true
(number? "Anna Karenina")               ; false
(string? "Anna Karenina")               ; true
(keyword? "Anna Karenina")              ; false
(keyword? :anna-karenina)               ; true
(map? :anna-karenina)                   ; false
(map? {:title 1984})                    ; true
(vector? 1984)                          ; false
(vector? [1984])                        ; true


;; Charge extra if it's an express order or oversized
;; and they are not a preferred customer.

(defn shipping-surcharge?
  ""
  [preferred-customer express oversized]
  (and (not preferred-customer) (or express oversized)))


;; ----------------
;; Truthy and Falsy
;; ----------------

(if 1
  "I like science fiction!"
  "I like mysteries!"
  )                                     ; "I like science fiction!"


(if "hello"
  "I like science fiction!"
  "I like mysteries!"
  )                                     ; "I like science fiction!"

(if [1 2 3]
  "I like science fiction!"
  "I like mysteries!"
  )                                     ; "I like science fiction!"


(if false
  "I like scifi!"
  "I like mysteries!"
  )                                   ; "I like mysteries!"


(if nil
  "I like scifi!"
  "I like mysteries!"
  )                                   ; "I like mysteries!"


(if 0 "yes" "no")                       ; "yes"
(if 1 "yes" "no")                       ; "yes"
(if 1.0 "yes" "no")                     ; "yes"
(if :russ "yes" "no")                   ; "yes"
(if "Russ" "yes" "no")                  ; "yes"
(if "true" "yes" "no")                  ; "yes"
(if "false" "yes" "no")                 ; "yes"
(if "nil" "yes" "no")                   ; "yes"


;; true, even empty vector, map or list
(if []
  (println "An empty vector is true!"))
(if [1 2 3]
    (println "So is a populated vector!"))
(if {}
  (println "An empty map is true!"))
(if {:title "Make Room! Make Room!"}
  (println "So is a full map!"))
(if ()
  (println "an empty list is true!"))
(if '(:full :list)
  (println "So is a full list!"))




;; -----------
;; Do and When
;; -----------

(do
  (println "This is four expressions.")
  (println "All grouped together as one")
  (println "That prints some stuff and then evalutates to 44")
  44
  )

(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (if preferred-customer
    (do
      (println "Preferred customer, free shipping!")
      0.0)
    (do
      (println "Regular customer, charge them for shipping.")
      (* order-amount 0.10))))

(let [preferred-customer true]
  (when preferred-customer
    (println "Hello returning customer!")
    (println "Welcome back to Blotts Books!")))


;; --------------------------------
;; Dealing with Multiple Conditions
;; --------------------------------

(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (if preferred-customer
    0.0
    (if (< order-amount 50.0)
      5.0
        (if (< order-amount 100.0)
            10.0
            (* 0.1 order-amount)))))

(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (cond
    preferred-customer 0.0
    (< order-amount 50.0) 5.0
    (< order-amount 100.0) 10.0))


(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (cond
    preferred-customer 0.0
    (< order-amount 50.0) 5.0
    (< order-amount 100.0) 10.0
    (>= order-amount 100.0) (* 0.1 order-amount)))

(defn shipping-charge
  ""
  [preferred-customer order-amount]
  (cond
    preferred-customer 0.0
    (< order-amount 50.0) 5.0
    (< order-amount 100.0) 10.0
    :else (* 0.1 order-amount)))


(defn customer-greeting
  ""
  [status]
  (case status
    :gold "Welcome, welcome, welcome back!!"
    :preferred "Welcome back!"
    "Welcome to Blotts Books"))


;; ---------------------
;; Throwing and Catching
;; ---------------------

;; user> (/ 0 0)
;; Execution error (ArithmeticException) at user/eval6574 (REPL:122).
;; Divide by zero

(defn publish-book
  ""
  [book]
  (when (not (:title book))
    (throw
     (ex-info "A book needs a title!" {:book book})))
  ;; Lots of publishing stuff...
  )

(let [book {}]
  (try
    (publish-book book)
    (catch ArithmeticException e
      (println "Math problem.")
      )
    (catch StackOverflowError e
      (println "Unable to publish...")
      )
    (catch clojure.lang.ExceptionInfo e
        (println "ex-info: " (.getMessage e))
      )))
