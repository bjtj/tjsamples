(ns blottsbooks.threads)

(defn -main
  ""
  []
  (println "Coming to you live from the main thread!")
  )

;; Make a thread!
(defn do-something-in-a-thread
  ""
  []
  (println "Hello from the thread.")
  (println "Good bye from the thread.")
  )

(def the-thread (Thread. do-something-in-a-thread))

;; And run it.
(.start the-thread)


(defn do-something-in-a-thread
  ""
  []
  (println "Hello from the thread.")
  (Thread/sleep 3000)
  (println "Good bye from the thread.")
  )

(.start (Thread. do-something-in-a-thread))

;; ... and great responsibility
;; ============================

(def fav-book "Jaws")
(defn make-emma-favorite
  ""
  []
  (def fav-book "Emma"))
(defn make-2001-favorite
  ""
  []
  (def fav-book "2001"))

(make-emma-favorite)
(make-2001-favorite)

;; Kick off the threads.
(.start (Thread. make-emma-favorite))
(.start (Thread. make-2001-favorite))

;; Good Fences Make Happy Threads
;; ==============================

(def ^:dynamic *favorite-book* "Oliver Twist")

(def thread-1
  (Thread.
   #(binding [*favorite-book* "2001"]
      (println "My favorite book is" *favorite-book*)))
  )

(def thread-2
  (Thread.
   #(binding [*favorite-book* "Emma"]
      (println "My favorite book is" *favorite-book*)))
  )

(.start thread-1)
(.start thread-2)


;; Promise Me a Result
;; ===================

(.start (Thread. #(.delete (java.io.File. "temp-titles.txt"))))

(def del-thread (Thread. #(.delete (java.io.File. "temp-titles.txt"))))

(.start del-thread)

(.join del-thread)

(def the-result (promise))

(deliver the-result "Emma")

(println "The value in my promise is" (deref the-result))

(println "The value in my promise is" @the-result)


(def inventory [{:title "Emma" :sold 51 :revenue 255}
                {:title "2001" :sold 17 :revenue 170}
                ])

(defn sum-copies-sold
  ""
  [inv]
  (apply + (map :sold inv)))

(defn sum-revenue
  ""
  [inv]
  (apply + (map :revenue inv)))

(let [copies-promise (promise)
      revenue-promise (promise)]
  (.start (Thread. #(deliver copies-promise (sum-copies-sold inventory))))
  (.start (Thread. #(deliver revenue-promise (sum-revenue inventory))))
  ;; Do some other stuff in this thread
  (println "The total number of books sold is" @copies-promise)
  (println "The total revenue is " @revenue-promise)
  )

;; A Value with a Future
;; =====================

(def revenue-future
  (future (apply + (map :revenue inventory))))

(println "The total revenue is " @revenue-future)

;; Staying Out of Trouble
;; ======================

(import java.util.concurrent.Executors)

;; Create a pool of at most three threads.

(def fixed-pool (Executors/newFixedThreadPool 3)))

(defn a-lot-of-work
  ""
  []
  (println "Simulating function that takes a long time.")
  (Thread/sleep 1000))

(defn even-more-work
  ""
  []
  (println "Simulating function that takes a long time.")
  (Thread/sleep 1000))

(.execute fixed-pool a-lot-of-work)
(.execute fixed-pool even-more-work)

(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)
(.execute fixed-pool even-more-work)

;; ... and it will get it all done as quickly as it can.

;; (deref revenue-promise)
;; @revenue-promise

;; Wait 1/2 second (500 milliseconds) for the revenue.
;; Return :oh-snap on timeout.

;; (deref revenue-promise 500 :oh-snap)

(defn -main
""
[]
(let [t (Thread. #((Thread/sleep 50000)))]
  (.start t))
(println "Mainthread is all done, but...")
)

(defn -main
""
[]
(let [t (Thread. #((Thread/sleep 50000)))]
  (.setDaemon t true)
  (.start t))
(println "Mainthread is all done, but...")
)
