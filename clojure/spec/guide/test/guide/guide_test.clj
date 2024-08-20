(ns guide.guide-test
  (:require [clojure.test :refer :all]
            [guide.guide :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [clojure.spec.test.alpha :as stest]
            [clojure.repl :refer [doc]]
            [clojure.pprint :refer [pprint]])
  (:import (java.util Date)))

(deftest conform-test
  (is (= 1000
         (s/conform even? 1000))))

(deftest valid-test
  (is (= true
         (s/valid? even? 10))))

(deftest multiple-valid-test
  (are [x y] (= x y)
    true (s/valid? nil? nil)
    true (s/valid? string? "abc")
    true (s/valid? #(> % 5) 10)
    false (s/valid? #(> % 5) 0)
    true (s/valid? inst? (Date.))
    true (s/valid? #{:club :diamond :heart :spade} :club)
    false (s/valid? #{:club :diamond :heart :spade} 42)
    true (s/valid? #{42} 42)))

(s/def :order/date inst?)
(s/def :deck/suit #{:club :diamond :heart :spade})

(deftest registry-test
  (are [x y] (= x y)
    true (s/valid? :order/date (Date.))
    :club (s/conform :deck/suit :club)))

(doc :order/date)
;; -------------------------
;; :order/date
;; Spec
;;   inst?

(doc :deck/suit)
;; -------------------------
;; :deck/suit
;; Spec
;;   #{:spade :heart :diamond :club}

(deftest composing-predicates-test
  (s/def :num/big-even (s/and int? even? #(> % 1000)))

  (are [x y] (= x y)
    false (s/valid? :num/big-even :foo)
    false (s/valid? :num/big-even 10)
    true (s/valid? :num/big-even 100000))

  (s/def :domain/name-or-id (s/or :name string?
                                  :id   int?))

  (are [x y] (= x y)
    true (s/valid? :domain/name-or-id "abc")
    true (s/valid? :domain/name-or-id 100)
    false (s/valid? :domain/name-or-id :foo))

  (is (= [:name "abc"]
         (s/conform :domain/name-or-id "abc")))

  (is (= [:id 100]
         (s/conform :domain/name-or-id 100))))

(deftest explain-test
  (s/explain :deck/suit 42)
  ;; 42 - failed: #{:spade :heart :diamond :club} spec: :deck/suit
  (s/explain :num/big-even 5)
  ;; 5 - failed: even? spec: :num/big-even
  (s/explain :domain/name-or-id :foo)
  ;; :foo - failed: string? at: [:name] spec: :domain/name-or-id
  ;; :foo - failed: int? at: [:id] spec: :domain/name-or-id
  (pprint (s/explain-data :domain/name-or-id :foo))
  ;; #:clojure.spec.alpha{:problems
  ;;                      ({:path [:name],
  ;;                        :pred clojure.core/string?,
  ;;                        :val :foo,
  ;;                        :via [:domain/name-or-id],
  ;;                        :in []}
  ;;                       {:path [:id],
  ;;                        :pred clojure.core/int?,
  ;;                        :val :foo,
  ;;                        :via [:domain/name-or-id],
  ;;                        :in []}),
  ;;                      :spec :domain/name-or-id,
  ;;                      :value :foo}
  )


(deftest entity-maps-test
  (testing "Entity Maps"

    (def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
    (s/def :acct/email-type (s/and string? #(re-matches email-regex %)))

    (s/def :acct/acctid int?)
    (s/def :acct/first-name string?)
    (s/def :acct/last-name string?)
    (s/def :acct/email :acct/email-type)

    (s/def :acct/person (s/keys :req [:acct/first-name :acct/last-name :acct/email]
                                :opt [:acct/phone]))

    (is (= true
           (s/valid? :acct/person
                     {:acct/first-name "Bugs"
                      :acct/last-name "Bunny"
                      :acct/email "bugs@example.com"})))

    (s/explain :acct/person
               {:acct/first-name "Bugs"})
    ;; #:acct{:first-name "Bugs"} - failed: (contains? % :acct/last-name) spec: :acct/person
    ;; #:acct{:first-name "Bugs"} - failed: (contains? % :acct/email) spec: :acct/person

    (s/explain :acct/person
               {:acct/first-name "Bugs"
                :acct/last-name "Bunny"
                :acct/email "n/a"})
    ;; "n/a" - failed: (re-matches email-regex %) in: [:acct/email] at: [:acct/email] spec: :acct/email-type

    (s/def :unq/person
      (s/keys :req-un [:acct/first-name :acct/last-name :acct/email]
              :opt-un [:acct/phone]))

    (is (= {:first-name "Bugs"
            :last-name "Bunny"
            :email "bugs@example.com"}
           (s/conform :unq/person
                      {:first-name "Bugs"
                       :last-name "Bunny"
                       :email "bugs@example.com"})))

    (s/explain :unq/person
               {:first-name "Bugs"
                :last-name "Bunny"
                :email "n/a"})
    ;; "n/a" - failed: (re-matches email-regex %) in: [:email] at: [:email] spec: :acct/email-type

    (s/explain :unq/person
               {:first-name "Bugs"})
    ;; {:first-name "Bugs"} - failed: (contains? % :last-name) spec: :unq/person

    (defrecord Person [first-name last-name email phone])

    (s/explain :unq/person
               (->Person "Bugs" nil nil nil))
    ;; {:first-name "Bugs"} - failed: (contains? % :email) spec: :unq/person
    ;; nil - failed: string? in: [:last-name] at: [:last-name] spec: :acct/last-name
    ;; nil - failed: string? in: [:email] at: [:email] spec: :acct/email-type

    (pprint (s/conform :unq/person
                       (->Person "Bugs" "Bunny" "bugs@example.com" nil)))
    ;; {:first-name "Bugs",
    ;;  :last-name "Bunny",
    ;;  :email "bugs@example.com",
    ;;  :phone nil}
    

    (s/def :my.config/port number?)
    (s/def :my.config/host string?)
    (s/def :my.config/id keyword?)
    (s/def :my.config/server (s/keys* :req [:my.config/id :my.config/host]
                                      :opt [:my.config/port]))
    (pprint (s/conform :my.config/server [:my.config/id :s1
                                          :my.config/host "example.com"
                                          :my.config/port 5555]))
    ;; #:my.config{:id :s1, :host "example.com", :port 5555}

    (s/def :animal/kind string?)
    (s/def :animal/says string?)
    (s/def :animal/common (s/keys :req [:animal/kind :animal/says]))
    (s/def :dog/tail? boolean?)
    (s/def :dog/breed string?)
    (s/def :animal/dog (s/merge :animal/common
                                (s/keys :req [:dog/tail? :dog/breed])))

    (is (= (s/valid? :animal/dog
                     {:animal/kind "dog"
                      :animal/says "woof"
                      :dog/tail? true
                      :dog/breed "retriever"})))))

(deftest multi-spec-test
  (s/def :event/type keyword?)
  (s/def :event/timestamp int?)
  (s/def :search/url string?)
  (s/def :error/message string?)
  (s/def :error/code int?)

  (defmulti event-type :event/type)
  (defmethod event-type :event/search [_]
    (s/keys :req [:event/type :event/timestamp :search/url]))
  (defmethod event-type :event/error [_]
    (s/keys :req [:event/type :event/timestamp :error/message :error/code]))

  (s/def :event/event (s/multi-spec event-type :event-type))

  (is (= true
         (s/valid? :event/event
                   {:event/type :event/search
                    :event/timestamp 1463970123000
                    :search/url "https://clojure.org"})))
  (is (= true
         (s/valid? :event/event
                   {:event/type :event/error
                    :event/timestamp 1463970123000
                    :error/message "Invalid host"
                    :error/code 500})))
  (s/explain :event/event
             {:event/type :event/search
              :search/url 200})
  ;; 200 - failed: string? in: [:search/url] at: [:event/search :search/url] spec: :search/url
  ;; {:event/type :event/search, :search/url 200} - failed: (contains? % :event/timestamp) at: [:event/search] spec: :event/event
  )

(deftest collections-test
  (is (= [:a :b :c]
         (s/conform (s/coll-of keyword?) [:a :b :c])))
  (is (= #{2 5 10}
         (s/conform (s/coll-of number?) #{5 10 2})))

  (s/def :ex/vnum3 (s/coll-of number? :kind vector? :count 3 :distinct true :into #{}))
  (is (= #{1 2 3}
         (s/conform :ex/vnum3 [1 2 3])))
  (s/explain :ex/vnum3 #{1 2 3})
  ;; #{1 3 2} - failed: vector? spec: :ex/vnum3
  (s/explain :ex/vnum3 [1 1 1])
  ;; [1 1 1] - failed: distinct? spec: :ex/vnum3
  (s/explain :ex/vnum3 [1 2 :a])
  ;; :a - failed: number? in: [2] spec: :ex/vnum3

  (s/def :geom/point (s/tuple double? double? double?))
  (is (= [1.5 2.5 -0.5]
         (s/conform :geom/point [1.5 2.5 -0.5])))

  (s/def :game/scores (s/map-of string? int?))
  (is (= {"Sally" 1000, "Joe" 500}
         (s/conform :game/scores {"Sally" 1000, "Joe" 500}))))


(deftest sequences-test
  (s/def :cook/ingredient (s/cat :quantity number? :unit keyword?))
  (is (= {:quantity 2, :unit :teapot}
         (s/conform :cook/ingredient [2 :teapot])))

  (s/explain :cook/ingredient [11 "peaches"])
  ;; "peaches" - failed: keyword? in: [1] at: [:unit] spec: :cook/ingredient

  (s/explain :cook/ingredient [2])
  ;; () - failed: Insufficient input at: [:unit] spec: :cook/ingredient

  (s/def :ex/seq-of-keywords (s/* keyword?))
  (is (= [:a :b :c]
         (s/conform :ex/seq-of-keywords [:a :b :c])))
  (s/explain :ex/seq-of-keywords [10 20])
  ;; 10 - failed: keyword? in: [0] spec: :ex/seq-of-keywords

  (s/def :ex/odds-then-maybe-even (s/cat :odds (s/+ odd?)
                                         :even (s/? even?)))
  (is (= {:odds [1 3 5], :even 100}
         (s/conform :ex/odds-then-maybe-even [1 3 5 100])))
  (is (= {:odds [1]}
         (s/conform :ex/odds-then-maybe-even [1])))
  (s/explain :ex/odds-then-maybe-even [100])
  ;; 100 - failed: odd? in: [0] at: [:odds] spec: :ex/odds-then-maybe-even

  (s/def :ex/opts (s/* (s/cat :opt keyword? :val boolean?)))
  (is (= [{:opt :silent?, :val false} {:opt :verbose, :val true}]
         (s/conform :ex/opts [:silent? false :verbose true])))

  (s/def :ex/config (s/*
                     (s/cat :prop string?
                            :val (s/alt :s string? :b boolean?))))
  (is (= [{:prop "-server", :val [:s "foo"]}
          {:prop "-verbose", :val [:b true]}
          {:prop "-user", :val [:s "joe"]}]
         (s/conform :ex/config ["-server" "foo" "-verbose" true "-user" "joe"])))

  (pprint (s/describe :ex/seq-of-keywords))
  ;; (* keyword?)
  (pprint (s/describe :ex/odds-then-maybe-even))
  ;; (cat :odds (+ odd?) :even (? even?))
  (pprint (s/describe :ex/opts))
  ;; (* (cat :opt keyword? :val boolean?))

  (s/def :ex/even-strings (s/& (s/* string?) #(even? (count %))))
  (are [x y] (= x y)
    false (s/valid? :ex/even-strings ["a"])
    true  (s/valid? :ex/even-strings ["a" "b"])
    false (s/valid? :ex/even-strings ["a" "b" "c"])
    true  (s/valid? :ex/even-strings ["a" "b" "c" "d"]))

  (s/def :ex/nested
    (s/cat :names-kw #{:names}
           :names (s/spec (s/* string?))
           :nums-kw #{:nums}
           :nums (s/spec (s/* number?))))
  (is (= {:names-kw :names, :names ["a" "b"], :nums-kw :nums, :nums [1 2 3]}
         (s/conform :ex/nested [:names ["a" "b"] :nums [1 2 3]])))

  (s/def :ex/unnested
    (s/cat :names-kw #{:names}
           :names (s/* string?)
           :nums-kw #{:nums}
           :nums (s/* number?)))
  (is (= {:names-kw :names, :names ["a" "b"], :nums-kw :nums, :nums [1 2 3]}
         (s/conform :ex/unnested [:names "a" "b" :nums 1 2 3])))
  )

(deftest spec-for-validation-test
  (testing "Using spec for validation"
    (defn person-name
      ""
      [person]
      {:pre [(s/valid? :acct/person person)]
       :post [(s/valid? string? %)]}
      (str (:acct/first-name person) " " (:acct/last-name person)))

    ;; (person-name 42)

    (is (= "Bugs Bunny"
           (person-name {:acct/first-name "Bugs"
                         :acct/last-name "Bunny"
                         :acct/email "bugs@example.com"})))

    (defn- set-config
      "dummy fn"
      [prop val]
      (println "set" prop val))

    (defn configure
      ""
      [input]
      (let [parsed (s/conform :ex/config input)]
        (if (s/invalid? parsed)
          (throw (ex-info "Invalid input" (s/explain-data :ex/config input)))
          (for [{prop :prop [_ val] :val} parsed]
            (set-config (subs prop 1) val)))))

    (configure ["-server" "foo" "-verbose" true "-user" "joe"])
    ))

(deftest specing-functions-test
  (defn ranged-rand
    "Returns random int in range start <= rand < end"
    [start end]
    (+ start (long (rand (- end start)))))

  (s/fdef ranged-rand
    :args (s/and (s/cat :start int? :end int?)
                 #(< (:start %) (:end %)))
    :ret int?
    :fn (s/and #(>= (:ret %) (-> % :args :start))
               #(< (:ret %) (-> % :args :end))))

  (doc ranged-rand)
  ;; -------------------------
  ;; guide.guide-test/ranged-rand
  ;; ([start end])
  ;;   Returns random int in range start <= rand < end
  ;; Spec
  ;;   args: (and (cat :start int? :end int?) (< (:start %) (:end %)))
  ;;   ret: int?
  ;;   fn: (and (>= (:ret %) (-> % :args :start)) (< (:ret %) (-> % :args :end)))
  )

(deftest higher-order-functions-test
  (defn adder
    [x]
    #(+ x %))

  (s/fdef adder
    :args (s/cat :x number?)
    :ret (s/fspec :args (s/cat :y number?)
                  :ret number?)
    :fn #(= (-> % :args :x) ((:ret %) 0))))

(deftest macros-test
  (s/fdef clojure.core/declare
    :args (s/cat :names (s/* simple-symbol?))
    :ret any?)

  ;; (declare 100)
  ;; ^^^^^^^^^^^^^
  ;; Syntax error (ClassCastException) compiling at (guide\guide_test.clj:388:3).
  ;; java.lang.Long cannot be cast to clojure.lang.IObj
  )

(deftest a-game-of-cards-test
  (def suit? #{:club :diamond :heart :spade})
  (def rank? (into #{:jack :queen :king :ace} (range 2 11)))
  (def deck (for [suit suit? rank rank?] [rank suit]))

  (s/def :game/card (s/tuple rank? suit?))
  (s/def :game/hand (s/* :game/card))

  (s/def :game/name string?)
  (s/def :game/score int?)
  (s/def :game/player (s/keys :req [:game/name :game/score :game/hand]))

  (s/def :game/players (s/* :game/player))
  (s/def :game/deck (s/* :game/card))
  (s/def :game/game (s/keys :req [:game/players :game/deck]))

  (def kenny
           {:game/name "Kenny Rogers"
            :game/score 100
            :game/hand []})

  (is (= true
         (s/valid? :game/player kenny)))

  (s/explain :game/game
             {:game/deck deck
              :game/players [{:game/name "Kenny Rogers"
                              :game/score 100
                              :game/hand [[2 :banana]]}]})
  ;; :banana - failed: suit? in: [:game/players 0 :game/hand 0 1] at: [:game/players :game/hand 1] spec: :game/card

  (defn total-cards
    ""
    [{:keys [:game/deck :game/players] :as game}]
    (apply + (count deck)
           (map #(-> % :game/hand count) players)))

  (defn deal
    [game]
    {:game/deck deck
     :game/players [{:game/name "Kenny Rogers"
                     :game/score 100
                     :game/hand [[2 :banana]]}]})

  (s/fdef deal
    :args (s/cat :game :game/game)
    :ret :game/game
    :fn #(= (total-cards (-> % :args :game))
            (total-cards (-> % :ret))))
  )

(deftest generators-test
  (testing "Sampling Generators"
    (pprint (gen/generate (s/gen int?)))
    ;; -6557777
    (pprint (gen/generate (s/gen nil?)))
    ;; nil
    (pprint (gen/sample (s/gen string?)))
    ;; ("" "" "48" "D9N" "60" "9qt" "26" "" "ZcpM5P0A" "01K5qhm")
    (pprint (gen/sample (s/gen #{:club :diamond :heart :spade})))
    ;; (:heart
    ;;  :club
    ;;  :spade
    ;;  :spade
    ;;  :diamond
    ;;  :spade
    ;;  :heart
    ;;  :diamond
    ;;  :spade
    ;;  :diamond)
    (pprint (gen/sample (s/gen (s/cat :k keyword? :ns (s/+ number?)))))
    ;; ((:J/! 0)
    ;;  (:X0/_v 0 0)
    ;;  (:WX/? 1 -0.5)
    ;;  (:N/-J 3.0 1 -0.5)
    ;;  (:C/+?L 0)
    ;;  (:?l./B -1.71875 0 -1.25)
    ;;  (:-/N:? ##-Inf 1.0)
    ;;  (:?/ql? -1 14 -0.75 3.5)
    ;;  (:b-./s -3.0 8 4)
    ;;  (:ZO/__Z 1 -1))
    (def suit? #{:club :diamond :heart :spade})
    (def rank? (into #{:jack :queen :king :ace} (range 2 11)))
    (def deck (for [suit suit? rank rank?] [rank suit]))
    (s/def :game/card (s/tuple rank? suit?))
    (s/def :game/hand (s/* :game/card))
    (s/def :game/name string?)
    (s/def :game/score int?)
    (s/def :game/player (s/keys :req [:game/name :game/score :game/hand]))
    (pprint (gen/generate (s/gen :game/player)))
    ;; #:game{:name "j5r8ls7V45ov4354BgRIp",
    ;;        :score -5284,
    ;;        :hand
    ;;        ([10 :diamond]
    ;;         [5 :diamond]
    ;;         [9 :spade]
    ;;         [:king :club]
    ;;         [5 :heart]
    ;;         [8 :diamond]
    ;;         [:jack :diamond]
    ;;         [:ace :club]
    ;;         [3 :diamond]
    ;;         [5 :spade]
    ;;         [10 :heart]
    ;;         [2 :club]
    ;;         [5 :club]
    ;;         [9 :spade]
    ;;         [:ace :diamond]
    ;;         [:jack :spade]
    ;;         [2 :club]
    ;;         [2 :club]
    ;;         [:ace :spade])}
    (s/def :game/players (s/* :game/player))
    (s/def :game/deck (s/* :game/card))
    (s/def :game/game (s/keys :req [:game/players :game/deck]))
    (pprint (gen/generate (s/gen :game/game)))
    ;; it works! but the output is really long, so not including it here
    )
  (testing "Exercise"
    (pprint (s/exercise (s/cat :k keyword? :ns (s/+ number?)) 5))
    ;; ([(:G/i 0) {:k :G/i, :ns [0]}]
    ;;  [(:i/. -1 -2.0) {:k :i/., :ns [-1 -2.0]}]
    ;;  [(:Y7/Ph -1) {:k :Y7/Ph, :ns [-1]}]
    ;;  [(:x/? 0.875 1 0.5 0) {:k :x/?, :ns [0.875 1 0.5 0]}]
    ;;  [(:fW0/F* -1) {:k :fW0/F*, :ns [-1]}])
    (pprint (s/exercise (s/or :k keyword? :s string? :n number?) 5))
    ;; ([0 [:n 0]]
    ;;  [0 [:n 0]]
    ;;  [:l4/G [:k :l4/G]]
    ;;  [0.5 [:n 0.5]]
    ;;  [:z_/Q+i [:k :z_/Q+i]])
    (defn ranged-rand
      "Returns random int in range start <= rand < end"
      [start end]
      (+ start (long (rand (- end start)))))
    (s/fdef ranged-rand
      :args (s/and (s/cat :start int? :end int?)
                   #(< (:start %) (:end %)))
      :ret int?
      :fn (s/and #(>= (:ret %) (-> % :args :start))
                 #(< (:ret %) (-> % :args :end))))
    (pprint (s/exercise-fn `ranged-rand))
    ;; ([(-2 1) 0]
    ;;  [(-1 1) 0]
    ;;  [(-2 0) -2]
    ;;  [(-4 -1) -2]
    ;;  [(-5 -2) -5]
    ;;  [(1 3) 2]
    ;;  [(-12 6) 2]
    ;;  [(-4 -2) -4]
    ;;  [(0 8) 3]
    ;;  [(-1 20) 6])
    (testing "Using s/and Generators"
      ;; (pprint (gen/generate (s/gen even?)))
      ;; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      ;;   actual: clojure.lang.ExceptionInfo: Unable to construct gen at: [] for: clojure.core$even_QMARK_@3c6bd624
      ;; #:clojure.spec.alpha{:path [], :form #object[clojure.core$even_QMARK_ 0x3c6bd624 "clojure.core$even_QMARK_@3c6bd624"], :failure :no-gen}
      (pprint (gen/generate (s/gen (s/and int? even?))))
      ;; 8
      (defn divisible-by
        [n]
        #(zero? (mod % n)))
      (pprint (gen/sample (s/gen (s/and int?
                                        #(> % 0)
                                        (divisible-by 3)))))
      ;; (6 247605 6 45 3 30 6 324 48 890967)
      ;; (gen/sample (s/gen (s/and string? #(clojure.string/includes? % "hello"))))
      ;; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      ;;   actual: clojure.lang.ExceptionInfo: Couldn't satisfy such-that predicate after 100 tries.
      ;; {:pred #object[clojure.spec.alpha$gensub$fn__1870 0x1109730f "clojure.spec.alpha$gensub$fn__1870@1109730f"], :gen #clojure.test.check.generators.Generator{:gen #object[clojure.test.check.generators$such_that$fn__2934 0x1f42366 "clojure.test.check.generators$such_that$fn__2934@1f42366"]}, :max-tries 100}
      )

    (testing "Custom Generators"
      (s/def :ex/kws (s/and keyword? #(= (namespace %) "my.domain")))
      (is (= true
             (s/valid? :ex/kws :my.domain/name)))
      ;; (gen/sample (s/gen :ex/kws))
      ;; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      ;;   actual: clojure.lang.ExceptionInfo: Couldn't satisfy such-that predicate after 100 tries.
      ;; {:pred #object[clojure.spec.alpha$gensub$fn__1870 0x4a9b92c6 "clojure.spec.alpha$gensub$fn__1870@4a9b92c6"], :gen #clojure.test.check.generators.Generator{:gen #object[clojure.test.check.generators$such_that$fn__2940 0x6eed46e9 "clojure.test.check.generators$such_that$fn__2940@6eed46e9"]}, :max-tries 100}
      (def kw-gen (s/gen #{:my.domain/name :my.domain/occupation :my.domain/id}))
      (pprint (gen/sample kw-gen 5))
      ;; (:my.domain/name
      ;;  :my.domain/id
      ;;  :my.domain/id
      ;;  :my.domain/occupation
      ;;  :my.domain/occupation)
      (s/def :ex/kws (s/with-gen (s/and keyword? #(= (namespace %) "my.domain"))
                       #(s/gen #{:my.domain/name :my.domain/occupation :my.domain/id})))
      (is (= true
             (s/valid? :ex/kws :my.domain/name)))
      (pprint (gen/sample (s/gen :ex/kws)))
      ;; (:my.domain/id
      ;;  :my.domain/id
      ;;  :my.domain/occupation
      ;;  :my.domain/name
      ;;  :my.domain/id
      ;;  :my.domain/occupation
      ;;  :my.domain/id
      ;;  :my.domain/name
      ;;  :my.domain/occupation
      ;;  :my.domain/name)

      (def kw-gen-2 (gen/fmap #(keyword "my.domain" %) (gen/string-alphanumeric)))
      (pprint (gen/sample kw-gen-2 5))
      ;; (:my.domain/ :my.domain/ :my.domain/2 :my.domain/3KI :my.domain/5)

      (def kw-gen-3 (gen/fmap #(keyword "my.domain" %)
                              (gen/such-that #(not= % "")
                                             (gen/string-alphanumeric))))
      (pprint (gen/sample kw-gen-3 5))
      ;; (:my.domain/D
      ;;  :my.domain/389
      ;;  :my.domain/8pB
      ;;  :my.domain/h4
      ;;  :my.domain/vqP)

      (s/def :ex/hello
        (s/with-gen #(clojure.string/includes? % "hello")
          #(gen/fmap (fn [[s1 s2]]
                       (str s1 "hello" s2))
                     (gen/tuple (gen/string-alphanumeric) (gen/string-alphanumeric)))))
      (pprint (gen/sample (s/gen :ex/hello)))
      ;; ("hello"
      ;;  "rhello"
      ;;  "hello5"
      ;;  "4aAhello"
      ;;  "ohellod"
      ;;  "hellom"
      ;;  "US7Jhello"
      ;;  "hellode50"
      ;;  "sb3VD24hello8jxxM"
      ;;  "IJ9hellodRU4")
      )
    )

  (testing "Range Specs and Generators"
    (s/def :bowling/roll (s/int-in 0 11))
    (pprint (gen/sample (s/gen :bowling/roll)))
    ;; (0 0 1 0 4 1 0 7 5 1)

    (s/def :ex/the-aughts (s/inst-in #inst "2000" #inst "2010"))
    (pprint (drop 50 (gen/sample (s/gen :ex/the-aughts) 55)))
    ;; (#inst "2000-01-01T00:00:03.120-00:00"
    ;;  #inst "2001-10-08T20:28:35.331-00:00"
    ;;  #inst "2000-01-01T00:00:02.097-00:00"
    ;;  #inst "2006-11-10T11:01:20.265-00:00"
    ;;  #inst "2000-01-01T00:00:01.331-00:00")

    (s/def :ex/dubs (s/double-in :min -100.0 :max 100.0 :NaN? false :infinite? false))
    (is (= true
           (s/valid? :ex/dubs 2.9)))
    (is (= false
           (s/valid? :ex/dubs Double/POSITIVE_INFINITY)))
    (pprint (gen/sample (s/gen :ex/dubs)))
    ;; (0.5 1.5 1.5 1.0 2.0 -2.875 -0.75 0.71875 0.25 3.578125)
    )
  )

(deftest instrumentation-and-testing-test
  (testing "Instrumentation" 

    (defn ranged-rand
      "Returns random int in range start <= rand < end"
      [start end]
      (+ start (long (rand (- end start)))))
    (s/fdef ranged-rand
      :args (s/and (s/cat :start int? :end int?)
                   #(< (:start %) (:end %)))
      :ret int?
      :fn (s/and #(>= (:ret %) (-> % :args :start))
                 #(< (:ret %) (-> % :args :end))))
    (stest/instrument `ranged-rand)
    ;; (ranged-rand 8 5)
    ;; ^^^^^^^^^^^^^^^^^
    ;;   actual: clojure.lang.ExceptionInfo: Call to guide.guide-test/ranged-rand did not conform to spec.
    ;; {:clojure.spec.alpha/problems [{:path [], :pred (clojure.core/fn [%] (clojure.core/< (:start %) (:end %))), :val {:start 8, :end 5}, :via [], :in []}], :clojure.spec.alpha/spec #object[clojure.spec.alpha$and_spec_impl$reify__2177 0x2f99d8c "clojure.spec.alpha$and_spec_impl$reify__2177@2f99d8c"], :clojure.spec.alpha/value (8 5), :clojure.spec.alpha/fn guide.guide-test/ranged-rand, :clojure.spec.alpha/args (8 5), :clojure.spec.alpha/failure :instrument, :clojure.spec.test.alpha/caller {:file "guide_test.clj", :line 667, :var-scope guide.guide-test/fn--2589}}
    )
  (testing "Testing"
    (pprint (stest/check `ranged-rand))
    ;; ({:spec
    ;;   #object[clojure.spec.alpha$fspec_impl$reify__2518 0x53e28097 "clojure.spec.alpha$fspec_impl$reify__2518@53e28097"],
    ;;   :clojure.spec.test.check/ret
    ;;   {:result true,
    ;;    :pass? true,
    ;;    :num-tests 1000,
    ;;    :time-elapsed-ms 104,
    ;;    :seed 1724162916713},
    ;;   :sym guide.guide-test/ranged-rand})

    (defn ranged-rand
      "BROKEN!! Returns random int in range start <= rand < end"
      [start end]
      (+ start (long (rand (- start end)))))

    (pprint (stest/abbrev-result (first (stest/check `ranged-rand))))
    ;; {:spec
    ;;  (fspec
    ;;   :args
    ;;   (and
    ;;    (cat :start int? :end int?)
    ;;    (fn* [p1__2586#] (< (:start p1__2586#) (:end p1__2586#))))
    ;;   :ret
    ;;   int?
    ;;   :fn
    ;;   (and
    ;;    (fn* [p1__2587#] (>= (:ret p1__2587#) (-> p1__2587# :args :start)))
    ;;    (fn* [p1__2588#] (< (:ret p1__2588#) (-> p1__2588# :args :end))))),
    ;;  :sym guide.guide-test/ranged-rand,
    ;;  :failure
    ;;  {:clojure.spec.alpha/problems
    ;;   [{:path [:fn],
    ;;     :pred
    ;;     (clojure.core/fn
    ;;      [%]
    ;;      (clojure.core/>= (:ret %) (clojure.core/-> % :args :start))),
    ;;     :val {:args {:start -2, :end 0}, :ret -3},
    ;;     :via [],
    ;;     :in []}],
    ;;   :clojure.spec.alpha/spec
    ;;   #object[clojure.spec.alpha$and_spec_impl$reify__2177 0x5b3755f4 "clojure.spec.alpha$and_spec_impl$reify__2177@5b3755f4"],
    ;;   :clojure.spec.alpha/value {:args {:start -2, :end 0}, :ret -3},
    ;;   :clojure.spec.test.alpha/args (-2 0),
    ;;   :clojure.spec.test.alpha/val {:args {:start -2, :end 0}, :ret -3},
    ;;   :clojure.spec.alpha/failure :check-failed}}

    (pprint (-> (stest/enumerate-namespace 'user) stest/check))
    )

  (testing "Combining check and instrument"
    (defn invoke-service [service request]
      ;; invokes remote service
      )

    (defn run-query [service query]
      (let [{:svc/keys [result error]} (invoke-service service {:svc/query query})]
        (or result error)))

    (s/def :svc/query string?)
    (s/def :svc/request (s/keys :req [:svc/query]))
    (s/def :svc/result (s/coll-of string? :gen-max 3))
    (s/def :svc/error int?)
    (s/def :svc/response (s/or :ok (s/keys :req [:svc/result])
                               :err (s/keys :req [:svc/error])))

    (s/fdef invoke-service
      :args (s/cat :service any? :request :svc/request)
      :ret :svc/response)

    (s/fdef run-query
      :args (s/cat :service any? :query string?)
      :ret (s/or :ok :svc/result :err :svc/error))

    (pprint (stest/instrument `invoke-service {:stub #{`invoke-service}}))
    ;; [guide.guide-test/invoke-service]
    (pprint (invoke-service nil {:svc/query "test"}))
    ;; #:svc{:result []}
    (pprint (invoke-service nil {:svc/query "test"}))
    ;; #:svc{:error -1}
    (pprint (stest/summarize-results (stest/check `run-query)))
    ;; {:sym guide.guide-test/run-query}
    ;; {:total 1, :check-passed 1}
    )
  )
