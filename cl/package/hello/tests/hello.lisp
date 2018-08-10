(defpackage hello-test
  (:use :cl
        :hello
        :prove))
(in-package :hello-test)

;; NOTE: To run this test file, execute `(asdf:test-system :hello)' in your Lisp.

(plan nil)

;; blah blah blah.

(finalize)
