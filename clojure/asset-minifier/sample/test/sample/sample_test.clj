(ns sample.sample-test
  (:require [clojure.test :refer :all]
            [sample.core :refer :all]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(deftest hello-test
  (testing "OK"
    (is (= (hello {:name "Steve"}) "Hello, Steve!"))))

