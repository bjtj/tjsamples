(require 'cl)
(require 'cl-seq)

(defun quicksort (lst)
  "Implement the quicksort algorithm."
  (if (null lst) nil
    (let* ((spl (car lst))
	   (rst (cdr lst))
	   (smalp (lambda (x)
		    (< x spl))))
      (append (quicksort (remove-if-not smalp rst))
	      (list spl)
	      (quicksort (remove-if smalp rst))))))

(quicksort '(5 7 1 3 -9 8 7 -4 0))
