#|
  This file is a part of hello project.
|#

(defsystem "hello-test"
  :defsystem-depends-on ("prove-asdf")
  :author ""
  :license ""
  :depends-on ("hello"
               "prove")
  :components ((:module "tests"
                :components
                ((:test-file "hello"))))
  :description "Test system for hello"

  :perform (test-op (op c) (symbol-call :prove-asdf :run-test-system c)))
