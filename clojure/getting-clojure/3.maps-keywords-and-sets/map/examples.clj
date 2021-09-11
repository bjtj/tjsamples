{"title" "Oliver Twist" "author" "Dickens" "published" 1838}

(hash-map "title" "Oliver Twist"
          "author" "Dickens"
          "published" 1838)

(def book
  {"title" "Oliver Twist" "author" "Dickens" "published" 1838})

(get book "published")

(book "published")

;; Keywords

:title
:author
:published
:word-count
:preface&introduction
:chapter-1-and-2

(def book 
  {:title "Oliver Twist" :author "Dickens" :published 1838})

(println "Title:" (book :title))
(println "By:" (book :author))
(println "Published:" (book :published))

(book :title)

(:title book)


;; Changing your map without changing iterate

(assoc book :page-count 362)

(assoc book :page-count 362 :title "War & Peace")

(dissoc book :published)

(dissoc book :title :author :published)

(dissoc book :paperback :illustrator :favorite-zoo-animal)

;; other handy map functions

(keys book)                             ; (:title :author :published)

(vals book)                             ; ("Oliver Twist" "Dickens" 1838)

;; sets

(def genres #{:sci-fi :romance :mystery})

(def authors #{"Dickens" "Austen" "King"})

(:sci-fi genres)                        ; :sci-fi
(:historical genres)                    ; nil

;; A four element set.

(def more-authors (conj authors "Clarke"))

(conj more-authors "Clarke")

;; A set without "King".

(disj more-authors "King")
