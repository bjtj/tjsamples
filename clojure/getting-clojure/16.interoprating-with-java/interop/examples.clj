(def authors (java.io.File. "authors.txt"))

(if (.exists authors)
    (println "Our authors file is there.")
    (println "Our authors file is missing.")
    )


(if (.canRead authors)
    (println "We can read it!")
    )

;; public method
(.setReadable authors true)

(if (.canRead authors)
    (println "We can read it!")
    )

(def rect (java.awt.Rectangle. 0 0 10 20))

;; public field
(println "Width:" (.-width rect))
(println "Height:" (.-height rect))

;; --------
;; Packages
;; --------

;; In the REPL.

;; (import java.io.File)


;; If you are writing a .clj file

(ns read-authors
  (:import java.io.File))


(def authors (File. "authors.txt"))


;; Do this in a .clj file:

(ns read-authors
  (:import (java.io File InputStream)))

;; In the REPL.

(import '(java.io File InputStream))


;; ------------------------
;; Class Methods and Fields
;; ------------------------

;; class/field

File/separator

;; class/method

(def temp-authors-file (File/createTempFile "authors_list" ".txt"))

(if (.canRead temp-authors-file)
    (println "We can read it!")
    )

;; Make a Clojure value which is also a Java object.

(def v [1 2 3])

;; Call a Java method on our Clojure value/Java object.

(.count v)


(def author "Dickens")                  ;Make a var.

(def the-var #'author)                  ;Grab the var.

(.get the-var)                          ;Pull the value out of the var: "Dickens"
(.-sym the-var)                         ;Pull the symbol out of the var: author

(def c (cons 99 [1 2 3]))

(class c)

;; https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/Cons.java

;; And call into the java.io
(.first c)
(.more c)
