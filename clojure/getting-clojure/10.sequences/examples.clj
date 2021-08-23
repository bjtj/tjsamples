;; ---------------------------------
;; Is this how count is implemented?
;; ---------------------------------

(defn flavor
  ""
  [x]
  (cond
    (list? x) :list
    (vector? x) :vector
    (set? x) :set
    (map? x) :map
    (string? x) :string
    :else :unknown))

(defmulti my-count flavor)

;; (defmethod my-count :list [x] (list-specific-count x))

;; (defmethod my-count :vector [x] (vector-specific-count x))

;; And so on...

(def title-seq (seq ["Emma" "Oliver Twist" "Robinson Crusoe"]))

(seq '("Emma" "Oliver Twist" "Robinson Crusoe"))

(seq {:title "Emma", :author "Austen", :published 1815})

;; Calling seq on a sequence is a noop.

(seq (seq ["Red Queen" "The Nightingale" "Uprooted"]))

(seq [])                                ; Gives you nil.
(seq '())                               ; Also nil.
(seq {})                                ; Nil again.

;; A Universal Interface

;; Returns "Emma".

(first (seq '("Emma" "oliver Twist" "Robinson Crusoe")))

;; Returns the sequence ("Oliver Twist" "Robinson Crusoe")
(rest (seq '("Emma" "Oliver Twist" "Robinson Crusoe")))

(cons "Emma" (seq '("Oliver Twist" "Robinson Crusoe")))

(defn my-count
  ""
  [col]
  (let [the-seq (seq col)]
    (loop [n 0 s the-seq]
      (if (seq s)
        (recur (inc n) (rest s))
          n
          )
    )
))

(rest [1 2 3])
(rest {:fname "Jane" :lname "Austen"})
(next {:fname "Jane" :lname "Austen"})

(cons 0 [1 2 3])
(cons 0 #{1 2 3})

;; A Rich Toolkit...
;; -----------------

(def titles ["Jaws" "Emma" "2001" "Dracula"])

(sort titles)                           ; Sequence: ("2001" "Dracula" "Emma" "Jaws")

;; A Sequence: ("Dracula" "2001" "Emma" "Jaws")
(reverse titles)

;; A Sequence: ("Jaws" "Emma" "Dracula" "2001")
(reverse (sort titles))

(def titles-and-authors ["Jaws" "Benchley" "2001" "Clarke"])

(partition 2 titles-and-authors)

;; (("Jaws" "Benchley") ("2001" "Clarke"))

;; A vector of titles and a list of authors.
(def titles ["Jaws" "2001"])
(def authors '("Benchley" "Clarke"))
(interleave titles authors)

;; ("Jaws" "Benchley" "2001" "Clarke")
(def scary-animals ["Lions" "tigers" "Bears"])

(interpose "and" scary-animals)

;; ...Made Richer with Functional Values
;; -------------------------------------

;; Returns the sequence (-22 -99 -77)

(filter neg? '(1 -22 3 -99 4 5 6 -77))

(def books
  [{:title "Deep Six" :price 13.99 :genre :sci-fi :rating 6}
   {:title "Dracula" :price 1.99 :genre :horror :rating 7}
   {:title "Emma" :price 7.99 :genre :comedy :rating 9}
   {:title "2001" :price 10.50 :genre :sci-fi :rating 5}])

(defn cheap?
  ""
  [book]
  (when (<= (:price book) 9.99)
    book))

(filter cheap? books)

;; ({:title "Dracula", :price 1.99, :genre :horror, :rating 7} {:title "Emma", :price 7.99, :genre :comedy, :rating 9})

(some cheap? books)

;; {:title "Dracula", :price 1.99, :genre :horror, :rating 7}

(if (some cheap? books)
  (println "We have cheap books for sale!")
    )


;; Map
;; ---

(def some-numbers [1, 53, 811])

(def doubled (map #(* 2 %) some-numbers))

(map (fn [book]
       (:title book)) books)

;; ("Deep Six" "Dracula" "Emma" "2001")


;; Turn the collection ofo books into a collection of titles.
;; The easy way!

(map :title books)

(map (fn [book] (count (:title book))) books)

;; (8 7 4 4)


(map (comp count :title) books)

(for [b books]
  (count (:title b))
  )

;; Reduce
;; ------

(def numbers [10 20 30 40 50])

(defn add2
  ""
  [a b]
  (+ a b)
  )

(reduce add2 0 numbers)

(reduce + 0 numbers)

(reduce + numbers)

(defn hi-price
  ""
  [hi book]
  (if (> (:price book) hi)
      (:price book)
      hi)
  )

(reduce hi-price 0 books)

;; Composing a Solution

(sort-by :rating books)

(reverse (sort-by :rating books))

(take 3 (reverse (sort-by :rating books)))

(map :title (take 3 (reverse (sort-by :rating books))))

(interpose
 " // "
 (map :title (take 3 (reverse (sort-by :rating books)))))

;; ("Emma" " // " "Dracula" " // " "Deep Six")

(defn format-top-titles
  ""
  [books]
  (apply
   str
   (interpose
    " // "
    (map :title (take 3 (reverse (sort-by :rating books)))))))

;; Other Sources of Sequences
;; --------------------------

(require '[clojure.java.io :as io])

(defn listed-author?
  ""
  [author]
  (with-open [r (io/reader "authors.txt")]
    (some (partial = author) (line-seq r))))

;; A regular expression that matches Pride and Prejudice followed by anything.
(def re #"Pride and Prejudice.*")

;; A string that may or may not match.
(def title "Pride and Prejudice and Zombies")

;; And we have a classic!
(if (re-matches re title)
    (println "We have a classic!")
    )

(re-seq #"\w+" title)

