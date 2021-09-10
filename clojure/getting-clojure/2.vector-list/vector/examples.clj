;; vector

[1 2 3 4]

[1 "two" 3 "four"]

[true 3 "four" 5]

[1 [true 3 "four" 5] 6]

[0 [1 [true 3 "four" 5] 6] 7]

;; toolkit of functions

(vector true 3 "four" 5)                ; [true 3 "four" 5]

(vector)                                ; []

(def novels ["Emma" "Coma" "War and Peace"])

(count novels)                          ; 3

(first novels)                          ; "Emma"

(rest novels)                           ; ("Coma" "War and Peace")

(rest (rest novels))                    ; ("War and Peace")

(rest ["Ready Player One"])             ; ()

(rest [])                               ; ()


(def year-books ["1491" "April 1865", "1984", "2001"])
(def third-book (first (rest (rest year-books))))
third-book                              ; "1984"

(nth year-books 2)                      ; "1984"
(year-books 2)                          ; "1984"


;; Growing your vectors

(conj novels "Carrie")                  ; ["Emma" "Coma" "War and Peace" "Carrie"]
(cons "Carrie" novels)                   ; ("Carrie" "Emma" "Coma" "War and Peace")

;; List

'(1 2 3)

'(1 2 3 "Four" 5 "six")
'(1 2.0 2.9999 "four" 5.001 "six")
'([1 2 ("a" "list" "inside a" "vector")] "inside" "a" "list")

(list 1 2 3 "four" 5 "six")

(def poems '("Iliad" "Odyssey" "Now We Are Six"))

(count poems)                           ; 3
(first poems)                           ; "Iliad"
(rest poems)                            ; ("Odyssey" "Now We Are Six")
(nth poems 2)                           ; "Now We Are Six"


;; List vs. Vector
;; * vector - similar to an array
;; * list - implemented as linked list
