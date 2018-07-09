;; http://www.sbcl.org/manual/#Threading-basics

(in-package :sb-thread)


(format t "Current thread: ~a~%" *current-thread*)

(defparameter *thread*
  (make-thread (lambda ()
				 (write-line (format nil "Hello, world in thread ~a" *current-thread*))
				 (sleep 1)
				 (write-line "[Done]")
				 )))

(format t "List all threads: ~a~%" (list-all-threads))

(join-thread *thread*)
