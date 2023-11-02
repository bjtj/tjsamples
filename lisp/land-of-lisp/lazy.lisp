;; Chapter 18. Lazy Programming

(defun add (a b) (princ "I am adding now") (+ a b))

(defmacro lazy (&body body)
  (let ((forced (gensym)) (value (gensym)))
    `(let ((,forced nil)
           (,value nil))
       (lambda ()
         (unless ,forced
           (setf ,value (progn ,@body))
           (setf ,forced t))
         ,value))))

(defun force (lazy-value) (funcall lazy-value))

(defparameter *foo* (lazy (add 1 2)))

(defmacro lazy-cons (a d) `(lazy (cons ,a ,d)))

(defun lazy-car (x) (car (force x)))

(defun lazy-cdr (x) (cdr (force x)))

(defparameter *foo* (lazy-cons 4 7))

(defparameter *integers*
  (labels ((f (n)
             (lazy-cons n (f (1+ n))))) (f 1)))

(defun lazy-nil () (lazy nil))

(defun lazy-null (x) (not (force x)))

(defun make-lazy (lst)
  (lazy (when lst
          (cons (car lst) (make-lazy (cdr lst))))))

(defun take (n lst)
  (unless (or (zerop n) (lazy-null lst))
    (cons (lazy-car lst) (take (1- n)
                               (lazy-cdr lst)))))

(defun take-all (lst)
  (unless (lazy-null lst) (cons (lazy-car lst) (take-all (lazy-cdr lst)))))
(defun lazy-mapcar (fun lst)
  (lazy
    (unless (lazy-null lst)
      (cons (funcall fun (lazy-car lst))
            (lazy-mapcar fun (lazy-cdr lst))))))

(defun lazy-mapcan (fun lst)
  (labels
      ((f (lst-cur)
         (if (lazy-null lst-cur)
             (force (lazy-mapcan fun (lazy-cdr lst)))
             (cons (lazy-car lst-cur) (lazy (f (lazy-cdr lst-cur)))))))
    (lazy 
      (unless (lazy-null lst)
        (f (funcall fun (lazy-car lst)))))))

(defun lazy-find-if (fun lst)
  (unless (lazy-null lst)
    (let ((x (lazy-car lst)))
      (if (funcall fun x)
          x
          (lazy-find-if fun (lazy-cdr lst))))))

(defun lazy-nth (n lst)
  (if (zerop n)
      (lazy-car lst)
      (lazy-nth (1- n) (lazy-cdr lst))))
