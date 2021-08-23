;; ---------------------
;; A Place for Your Vars
;; ---------------------

(def discount-rate 0.15)


(ns pricing)

(def discount-rate 0.15)

(defn discount-price
  ""
  [book]
  (* (- 1.0 discount-rate) (:price book)))

(ns user)

;; Back to the pricing namespace.

(ns pricing)

(println (discount-price {:title "Emma" :price 9.99}))

(ns user)

;; How do I get at discount-price?

(ns user)

;; I can get at discount-price in pricing like this!

(println (pricing/discount-price {:title "Emma" :price 9.99}))

;; Loading Namespaces

;; user> (def literature ["Emma" "Oliver Twist" "Possession"])
;; #'user/literature
;; user> (def horror ["It" "Carry" "Possession"])
;; #'user/horror
        

;; user> (clojure.data/diff literature horror)
;; Execution error (ClassNotFoundException) at java.net.URLClassLoader/findClass (URLClassLoader.java:433).
;; clojure.data


;; user> (require 'clojure.data)
;; nil
;; user> (clojure.data/diff literature horror)
;; [["Emma" "Oliver Twist"] ["It" "Carry"] [nil nil "Possession"]]



;; A Namespace of Your Own

;; $ lein new app blottsbooks
