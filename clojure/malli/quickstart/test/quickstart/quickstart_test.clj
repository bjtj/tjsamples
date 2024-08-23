(ns quickstart.quickstart-test
  (:require [clojure.test :refer :all]
            [quickstart.quickstart :refer :all]
            [malli.core :as m]))

(deftest basic-syntax-test
  (def non-empty-string
    (m/schema [:string {:min 1}]))

  (is (= true (m/schema? non-empty-string)))
  (is (= false (m/validate non-empty-string "")))
  (is (= true (m/validate non-empty-string "kikka")))
  (is (= [:string {:min 1}] (m/form non-empty-string))))


(deftest map-syntax-test
  (def non-empty-string
    (m/from-ast {:type :string
                 :properties {:min 1}}))

  (is (= true (m/schema? non-empty-string)))
  (is (= false (m/validate non-empty-string "")))
  (is (= true (m/validate non-empty-string "kikka")))
  (is (= {:type :string, :properties {:min 1}}
         (m/ast non-empty-string))))

(deftest validation-test
  (is (true? (m/validate (m/schema :int) 1)))
  (is (true? (m/validate :int 1)))
  (is (false? (m/validate :int "1")))
  (is (true? (m/validate [:= 1] 1)))
  (is (true? (m/validate [:and :int [:> 6]] 7)))
  (is (true? (m/validate [:qualified-keyword {:namespace :aaa}] :aaa/bbb)))

  (def valid?
    (m/validator
     [:map
      [:x :boolean]
      [:y {:optional true} :int]
      [:z :string]]))

  (is (true? (valid? {:x true, :z "kikka"})))

  ;; Maps are open by default:
  (is (true? (m/validate [:map [:x :int]]
                         {:x 1, :extra "key"})))
  ;; Maps can be closed with `:closed` property:
  (is (false? (m/validate [:map {:closed true} [:x :int]]
                          {:x 1, :extra "key"})))
  ;; Maps keys are not limited to keywords:
  (is (true? (m/validate
              [:map
               ["status" [:enum "ok"]]
               [1 :any]
               [nil :any]
               [::a :string]]
              {"status" "ok"
               1 'number
               nil :yay
               ::a "properly awesome"})))

  ;; Most core-predicates are mapped to Schemas:
  (is (true? (m/validate string? "kikka"))))


(deftest qualified-keys-in-a-map-test
  (is (true? (m/validate
              [:map {:registry {::id int?
                                ::country string?}}
               ::id
               [:name string?]
               [::country {:optional true}]]
              {::id 1
               :name "kikka"}))))


(deftest homogeneous-maps-test
  (is (true? (m/validate
              [:map-of :string [:map [:lat number?] [:long number?]]]
              {"oslo" {:lat 60 :long 11}
               "helsinki" {:lat 60 :long 24}}))))

(deftest map-with-default-schemas-test
  (is (true? (m/validate
              [:map
               [:x :int]
               [:y :int]
               [::m/default [:map-of :int :int]]]
              {:x 1, :y 2, 1 1, 2 2})))

  ;; default branching can be arbitrarily nested:
  (is (true? (m/validate
              [:map
               [:x :int]
               [::m/default [:map
                             [:y :int]
                             [::m/default [:map-of :int :int]]]]]
              {:x 1, :y 2, 1 1, 2 2}))))


(deftest seqable-schemas-test
  ;; :seqable and :every validate identically with small, counted, or indexed collections.
  (is (true? (m/validate [:seqable :int] #{1 2 3})))
  (is (true? 
       (m/validate [:seqable :int] [1 2 3])))
  (is (true? 
       (m/validate [:seqable :int] (sorted-set 1 2 3))))
  (is (true? 
       (m/validate [:seqable :int] (range 1000))))
  (is (false? 
       (m/validate [:seqable :int] (conj (vec (range 1000)) nil))))

  (is (true? 
       (m/validate [:every :int] #{1 2 3})))
  (is (true? 
       (m/validate [:every :int] [1 2 3])))
  (is (true? 
       (m/validate [:every :int] (sorted-set 1 2 3))))
  (is (true? 
       (m/validate [:every :int] (vec (range 1000)))))
  (is (false? 
       (m/validate [:every :int] (conj (vec (range 1000)) nil))))

  ;; for large uncounted and unindexed collections, :every only checks a certain length
  (is (false? 
       (m/validate [:seqable :int] (concat (range 1000) [nil]))))
  (is (true? 
       (m/validate [:every :int] (concat (range 1000) [nil])))))


(deftest sequence-schemas-test
  ;; `:sequential`
  (is (true? (m/validate [:sequential any?]
                         (list "this" 'is :number 42))))
  (is (true? (m/validate [:sequential int?]
                         [42 105])))
  (is (false? (m/validate [:sequential int?]
                          #{42 105})))


  ;; `:cat` & `:catn`
  (is (true? (m/validate [:cat string? int?]
                         ["foo" 0])))
  (is (true? (m/validate [:catn [:s string?] [:n int?]]
                         ["foo" 0])))

  ;; `:alt` & `:altn`
  (is (true? (m/validate [:alt keyword? string?]
                         ["foo"])))
  (is (true? (m/validate [:altn [:kw keyword?] [:s string?]]
                         ["foo"])))

  ;; `:?`, `:*`, `:+`, & `:repeat`
  (is (true? (m/validate [:? int?]
                         [])))
  (is (true? (m/validate [:? int?]
                         [1])))
  (is (false? (m/validate [:? int?]
                          [1 2])))

  (is (true? (m/validate [:* int?]
                         [])))
  (is (true? (m/validate [:* int?]
                         [1 2 3])))

  (is (false? (m/validate [:+ int?]
                          [])))
  (is (true? (m/validate [:+ int?]
                         [1])))
  (is (true? (m/validate [:+ int?]
                         [1 2 3])))

  (is (false? (m/validate [:repeat {:min 2, :max 4} int?]
                          [1])))
  (is (true? (m/validate [:repeat {:min 2, :max 4} int?]
                         [1 2])))
  (is (true? (m/validate [:repeat {:min 2, :max 4} int?] ; => true (:max is inclusive, as elsewhere in Malli)
                         [1 2 3 4])))
  (is (false? (m/validate [:repeat {:min 2, :max 4} int?]
                          [1 2 3 4 5]))))


(deftest vector-schemas-test
  (is (true? (m/validate [:vector int?] [1 2 3])))
  (is (false? (m/validate [:vector int?] (list 1 2 3))))

  (is (true? (m/validate [:tuple keyword? string? number?] [:bing "bang" 42])))

  ;; non-empty vector starting with a keyword
  (is (true? (m/validate [:and [:cat :keyword [:* :any]]
                          vector?]
                         [:a 1])))

  (is (false? (m/validate [:and [:cat :keyword [:* :any]]
                           vector?]
                          (:a 1)))))

(deftest set-schemas-test
  (is (true? (m/validate [:set int?] #{42 105})))
  (is (false? (m/validate [:set int?] #{:a :b}))))


(deftest string-schemas-test
  (is (true? (m/validate :string "kikka")))
  (is (false? (m/validate [:string {:min 1, :max 4}] "")))

  ;; regex
  (is (true? 
       (m/validate #"a+b+c+" "abbccc")))
  ;; :re with string
  (is (true?
       (m/validate [:re ".{3,5}"] "abc")))
  ;; :re with regex
  (is (true?
       (m/validate [:re #".{3,5}"] "abc")))
  ;; NB: re-find semantics
  (is (true?
       (m/validate [:re #"\d{4}"] "1234567")))
  ;; anchor with ^...$ if you want to strictly match the whole string
  (is (false?
       (m/validate [:re #"^\d{4}$"] "1234567"))))


(deftest maybe-schemas-test
  ;; Use `:maybe` to express that an element should match some schema OR be nil:
  (is (true? (m/validate [:maybe string?] "bingo")))
  (is (true? (m/validate [:maybe string?] nil)))
  (is (false? (m/validate [:maybe string?] :bingo))))


(deftest fn-schemas-test
  (def my-schema
    [:and
     [:map
      [:x int?]
      [:y int?]]
     [:fn (fn [{:keys [x y]}] (> x y))]])

  (is (true? (m/validate my-schema {:x 1, :y 0})))
  (is (false? (m/validate my-schema {:x 1, :y 2}))))
