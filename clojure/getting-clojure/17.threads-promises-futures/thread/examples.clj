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


;; (def revenue-future
;;   (future (apply + (map :revenue inventory))))

;; (println "The total revenue is " #revenue-future))

(import java.util.concurrent.Executors)

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
