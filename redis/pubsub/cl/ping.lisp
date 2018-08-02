(ql:quickload 'cl-redis)
(defpackage :my-redis (:use :cl :redis))
(in-package :my-redis)

(redis:connect :host "localhost" :port 6379)
(print (red:ping))
(redis:disconnect)
