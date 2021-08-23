(ns inventory.core-test
  (:require [clojure.test :refer :all]
            [inventory.core :as i :refer :all]))

(def books
  [{:title "2001" :author "Clarke" :copies 21}
   {:title "Emma" :author "Austen" :copies 10}
   {:title "Misery" :author "King" :copies 101}])

(deftest test-finding-books
  (is (not (nil? (i/find-by-title "Emma" books))))
  )


(deftest test-finding-books-better
  (is (not (nil? (i/find-by-title "Emma" books))))
  (is (nil? (i/find-by-title "XYZZY" books)))
  )

(deftest test-basic-inventory
  (testing "Finding books"
    (is (not (nil? (i/find-by-title "Emma" books))))
    (is (nil? (i/find-by-title "XYZZY" books))))
  (testing "Copies in inventory"
    (is (= 10 (i/number-of-copies-of "Emma" books))))
  )

