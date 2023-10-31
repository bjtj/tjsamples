(ql:quickload '("hunchentoot" "caveman2" "spinneret" "djula" "easy-routes"))

(defvar *acceptor* (make-instance 'hunchentoot:easy-acceptor :port 4242))
(hunchentoot:start *acceptor*)

(setf (hunchentoot:acceptor-document-root *acceptor*) #p"www")

;; http://localhost:4242/www/index.html

(defvar *my-acceptor* (make-instance 'hunchentoot:easy-acceptor :port 4444
                                   :document-root #p"www/"))
(hunchentoot:start *my-acceptor*)

;; http://localhost:4444/

(defun shutdown ()
  (hunchentoot:stop *acceptor*)
  (hunchentoot:stop *my-acceptor*))
