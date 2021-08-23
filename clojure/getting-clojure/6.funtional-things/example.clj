(def dracula {:title "Dracula"
              :author "Stoker"
              :price 1.99
              :genre :horror
              })

(defn cheap?
  ""
  [book]
  (when (<= (:price book) 9.99)
    book)
  )

(defn pricey?
  ""
  [book]
  (when (> (:price book) 9.99)
    book)
  )

(cheap? dracula)
(pricey? dracula)

(defn horror?
  ""
  [book]
  (when (= (:genre book) :horror)
    book)
  )

(defn adventure?
  ""
  [book]
  (when (= (:genre book) :adventure)
    book)
  )

(horror? dracula)
(adventure? dracula)
         

(defn cheap-horror?
  ""
  [book]
  (when (and (cheap? book)
             (horror? book))
    book)
  )

(defn pricy-adventure?
  ""
  [book]
  (when (and (pricey? book)
    (adventure? book))
  book)
  )

(def reasonably-priced? cheap?)

(reasonably-priced? dracula)


(defn run-with-dracula
  ""
  [f]
  (f dracula))

(run-with-dracula pricey?)
(run-with-dracula horror?)

(defn both?
  ""
  [first-predicate-f second-predicate-f book]
  (when (and (first-predicate-f book)
             (second-predicate-f book))
    book)
  )

(both? cheap? horror? dracula)
(both? pricey? adventure? dracula)
