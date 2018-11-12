(in-package :cl-user)
(defpackage hello-web-test
  (:use :cl
        :hello-web
        :prove))
(in-package :hello-web-test)

(plan nil)

;; blah blah blah.

(finalize)
