# malli quickstart

...

Schemas can have properties:

``` clojure
(def Age
  [:and
   {:title "Age"
    :description "It's an age"
    :json-schema/example 20}
   :int [:> 18]])

(m/properties Age)
; => {:title "Age"
;     :description "It's an age"
;     :json-schema/example 20}
```

Maps are open by default:

``` clojure
(m/validate
  [:map [:x :int]]
  {:x 1, :extra "key"})
; => true
```

Maps can be closed with :closed property:

``` clojure
(m/validate
  [:map {:closed true} [:x :int]]
  {:x 1, :extra "key"})
; => false
```

Maps keys are not limited to keywords:

``` clojure
(m/validate
  [:map
   ["status" [:enum "ok"]]
   [1 :any]
   [nil :any]
   [::a :string]]
  {"status" "ok"
   1 'number
   nil :yay
   ::a "properly awesome"})
; => true
```

Most core-predicates are mapped to Schemas:

``` clojure
(m/validate string? "kikka")
; => true
```
