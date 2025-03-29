# Codox #

<https://github.com/weavejester/codox>

A tool for generating API documentation from Clojure or ClojureScript source code.

deps.edn:

``` clojure
:codox {:extra-deps {codox/codox {:mvn/version "0.10.8"}}
        :exec-fn codox.main/generate-docs
        :exec-args {:source-paths ["path/to/src"]}}
```

Run Codox via `-X` like this:

``` shell
clojure -X:codox
```

