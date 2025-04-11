# Getting Started #

<https://github.com/taoensso/timbre/wiki/1-Getting-started>

## clojure ##

``` shell
powershell clj -M:run-m
```

## clojurescript ##

``` shell
powershell clj -M --main cljs.main --compile getting-started.hello --repl
```

e.g.)

``` clojure
cljs.user=> (require '[getting-started.hello :as hello])
nil
cljs.user=> (hello/basic)
basic!
nil
;; check out developer console in browser
```

