(ql:quickload 'cl-redis)
(defpackage :my-redis (:use :cl :redis))
(in-package :my-redis)

(with-connection () (red:publish "my-channel" "hello"))
