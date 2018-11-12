(defsystem "hello-web-test"
  :defsystem-depends-on ("prove-asdf")
  :author "tj"
  :license ""
  :depends-on ("hello-web"
               "prove")
  :components ((:module "tests"
                :components
                ((:test-file "hello-web"))))
  :description "Test system for hello-web"
  :perform (test-op (op c) (symbol-call :prove-asdf :run-test-system c)))
