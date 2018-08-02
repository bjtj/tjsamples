(ql:quickload '(cl-redis bordeaux-threads))
(defpackage :my-redis (:use :cl :redis))
(in-package :my-redis)

(bt:make-thread
 (lambda ()
   (with-connection ()
					(red:subscribe "my-channel")
					(loop :for msg := (expect :anything) :do
						  (format t "~a~%" msg)))))

