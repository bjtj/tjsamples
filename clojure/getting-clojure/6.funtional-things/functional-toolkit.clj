(+ 1 2 3 4)

(def the-function +)
(def args [1 2 3 4])

(apply the-function args)

(def v ["The number " 2 " best selling " "book."])

(apply str v)

(apply list v)

(apply vector (apply list v))

(defn my-inc
  ""
  [n]
  (+1 n))

(def my-inc (partial + 1))

(defn cheaper-than
  ""
  [max-price book]
  (when (<= (:price book) max-price)
    book))

(def real-cheap? (partial cheaper-than 1.00))
(def kind-of-cheap? (partial cheaper-than 1.99))
(def marginally-cheap? (partial cheaper-than 5.99))

(defn adventure?
  ""
  [book]
  (when (= (:genre book) :adventure)
    book))

(defn not-adventure?
  ""
  [book]
  (not (adventure? book)))

(def not-adventure? (complement adventure?))


;; (def cheap-horror? (every-pred cheap? horror?))

;; (def cheap-horror-possession?
;;   (every-pred
;;    cheap?
;;    horror?
;;    (fn [book]
;;      (= (:title book) "Possession"))))


;; -----------
;; In the Wild
;; -----------

(defn say-welcome
  ""
  [what]
  (println "Welcome to" what "!")
  )

(def say-welcome
  (fn [what]
    (println "Welcome to" what "!")
    ))

(def book {:title "Emma" :copies 1000})

(def new-book (update book :copies inc))

(def by-author
  {:name "Janem Austen"
   :book {:title "Emma" :copies 1000}})

;; (ns ring-example.core (:require [ring.adapter.jetty :as jetty]))

(defn handler
  ""
  [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello from your web application!"})

;; (defn -main
;;   ""
;;   []
;;   (jetty/run-jetty handler {:port 8080}))

(defn log-value
  "Log the message and the value. Returns the value."
  [msg value]
  (println msg value)
  value)

(defn wrap-logging
  "Return a function that logs the response."
  [msg handler]
  (fn [request]
    (log-value msg (handler request))))

(defn wrap-content-type
  "Return a function that sets the response content type."
  [handler content-type]
  (fn [request]
    (assoc-in
     (handler request)
     [:headers "Content-Type"]
     content-type)))

(defn handler
  ""
  [request]
  {:status 200
   :body "Hello from your web application!"})

(def app
  (wrap-logging
   "Final response:"
   (wrap-content-type handler "text/html")))

(def app
  (wrap-content-type
   (wrap-logging "Initial response:" handler)
   "text/html"))

(def app
  (wrap-logging
   "Final response:"
   (wrap-content-type
    (wrap-logging "Initial response:" handler)
    "text/html")))
