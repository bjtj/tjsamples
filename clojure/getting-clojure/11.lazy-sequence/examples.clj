;; Sequences Without End
;; ---------------------

(def jack "All work and no play makes Jack a dull boy.")

(def text [jack jack jack jack jack jack jack jack jack])

;; Be careful with repeated-text in the REPL.
;; There's a surprise lurking...
(def repeated-text (repeat jack))

;; Returns the "All work..." string.
(first repeated-text)

;; So does this.

(nth repeated-text 10)

;; And this.

(nth repeated-text 10202)

(take 20 repeated-text)

;; More interesting Laziness
;; -------------------------

(take 7 (cycle [1 2 3]))

(def numbers (iterate inc 1))

(first numbers)

(nth numbers 0)
(nth numbers 1)
(nth numbers 99)
(take 5 numbers)

;; Lazy Friends
;; ------------

(def many-nums (take 1000000000 (iterate inc 1)))

(println (take 20 (take 1000000000 (iterate inc 1))))

(def evens (map #(* 2 %) (iterate inc 1)))

(take 20 evens)

(take 10 (interleave numbers evens))

;; Laziness in Practice
;; --------------------

(def test-books
  [{:author "Bob Jordan", :title "Wheel of Time, Book 1"}
   {:author "Jane Austen", :title "Wheel of Time, Book 2"}
   {:author "Chuck Dickns", :title "Wheel of Time, Book 3"}
   {:author "Leo Tolstoy", :title "Wheel of Time, Book 4"}
   {:author "Bob Poe", :title "Wheel of Time, Book 5"}
   {:author "Jane Jordan", :title "Wheel of Time, Book 6"}
   {:author "Chuck Austen", :title "Wheel of Time, Book 7"}]
  )

(def numbers [1 2 3])
(def trilogy (map #(str "Wheel of Time, Book " %) numbers))

(def numbers (iterate inc 1))

(def titles (map #(str "Wheel of Time, Book " %) numbers))

(def first-names ["Bob" "Jane" "Chuck" "Leo"])

(cycle first-names)

(def last-names ["Jordan" "Austen" "Dickes" "Tolstoy" "Peo"])

(cycle last-names)

(defn combine-names
  ""
  [fname lname]
  (str fname " " lname))

(def authors
  (map combine-names
       (cycle first-names)
       (cycle last-names)))

(defn make-book
  ""
  [title author]
  {:author author :title title})

(def test-books (map make-book titles authors))

;; Behind the Scenes
;; -----------------

(lazy-seq [1 2 3])

(defn chatty-vector
  ""
  []
  (println "Here we go!")
  [1 2 3]
  )

;; No output when we do this.
(def s (lazy-seq (chatty-vector)))

;; This will cause "Here we go!" to print.

(first s)


;; Note that the real `repeat` has a couple of arities
;; that we won't bother to implement here.

(defn my-repeat
  ""
  [x]
  (cons x (lazy-seq (my-repeat x))))

(defn my-iterate
  ""
  [f x]
  (cons x (lazy-seq (my-iterate f (f x)))))

(defn my-map
  ""
  [f col]
  (when-not (empty? col)
    (cons (f (first col))
          (lazy-seq (my-map f (rest col))))))


