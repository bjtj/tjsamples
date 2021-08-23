(defn average
  "Return the averagge of a and b"
  [a b]
  (/ (+ a b ) 2.0)
  )

(doc average)

(defn multi-average
  "Return average of 2 or 3 numbers."
  ([a b]
   (/ (+ a b ) 2.0))
  ([a b c]
   (/ (+ a b c) 3.0))
  )

(doc multi-average)
