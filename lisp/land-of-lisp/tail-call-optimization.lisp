(defun my-length (lst) (if lst (1+ (my-length (cdr lst))) 0))

(my-length '(fie foh fum))

(defparameter *biglist* (loop for i below 100000 collect 'x))

(my-length *biglist*)
; Evaluation aborted on #<SB-KERNEL::CONTROL-STACK-EXHAUSTED {10062FFD23}>.

;; Tail Call Optimization
;; ----

(defun my-length (lst)
  (labels ((f (lst acc)
             (if lst
                 (f (cdr lst)
                    (1+ acc))
                 acc)))
    (f lst 0)))
;; WARNING: redefining COMMON-LISP-USER::MY-LENGTH in DEFUN
;; MY-LENGTH
(my-length '(fie foh fum))
;; 3
(compile 'my-length)
;; MY-LENGTH
;; NIL
;; NIL
(my-length *biglist*)
;; 100000
