(require '[clojure.test :as test :refer :all])
(require '[inventory.core-test :as ct])

(ct/test-finding-books)

;; Three ways to run the tests in a namespace.

(test/run-tests)
(test/run-tests *ns*)
(test/run-tests 'inventory.core-test)
