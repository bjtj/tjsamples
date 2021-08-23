(def books
  [{:title "Jaws" :copies-sold 2000000}
   {:title "Emma" :copies-sold 3000000}
   {:title "2001" :copies-sold 4000000}
   ])


(defn sum-copies
  ""
  ([books] (sum-copies books 0))
  ([books total]
   (if (empty? books)
     total
     (sum-copies
      (rest books)
      (+ total (:copies-sold (first books)))))
       )
  )

(defn sum-copies
  ""
  ([books] (sum-copies books 0))
  ([books total]
   (if (empty? books)
     total
     (recur
      (rest books)
      (+ total (:copies-sold (first books)))))
       )
  )
