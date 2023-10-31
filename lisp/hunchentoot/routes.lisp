(ql:quickload '("hunchentoot" "caveman2" "spinneret" "djula" "easy-routes"))

(setf *server* (make-instance 'easy-routes:easy-routes-acceptor))

(defun hello ()
  (format nil "Hello, it works!"))

(push
 (hunchentoot:create-prefix-dispatcher "/hello.html" #'hello)
 hunchentoot:*dispatch-table*)

;; http://localhost/hello.html

(easy-routes:defroute my-route-name ("/foo/:x" :method :get) (y &get z)
  (format nil "x: ~a y: ~a z: ~a" x y z))

;; http://localhost/foo/hi?y=hello&z=world
;; => x: hi y: hello z: world

(defun start-server ()
  (hunchentoot:start *server*))

(defun shutdown ()
  (hunchentoot:stop *server*))
