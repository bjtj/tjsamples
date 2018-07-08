(ql:quickload :usocket)
(defpackage :echo (:use :cl :usocket))
(in-package :echo)

(defun read-all (stream)
  (loop for char = (read-char-no-hang stream nil :eof)
		until (or (null char) (eql char :eof)) collect char into msg
		finally (return (values msg char))))

(defun echo-send (message port)
  (with-client-socket (sock str "127.0.0.1" port)
					  (write-string message str)
					  (force-output str)
					  (when (wait-for-input sock :timeout 5)
						(coerce (read-all str) 'string))))

(format t "~a~%" (echo-send "Hello echo!" 12321))
