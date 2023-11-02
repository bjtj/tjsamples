;; 15. Dice of Doom, a Game Written in the Functional Style -- Closures
;; ====

;; sbcl --load closure.lisp --quit

(let ((line-number 0))
  (defun my-print (x)
    (print line-number)
    (print x)
    (incf line-number) nil))
;; MY-PRINT
(my-print "this")

;; 0 
;; "this" 
;; NIL
(my-print "is")

;; 1 
;; "is" 
;; NIL
(my-print "a")

;; 2 
;; "a" 
;; NIL
(my-print "test")

;; 3 
;; "test" 
;; NIL

