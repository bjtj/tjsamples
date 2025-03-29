# sample/sample #

deps.edn:

``` clojure
:codox {:extra-deps {codox/codox {:mvn/version "0.10.8"}}
        :exec-fn codox.main/generate-docs
        :exec-args {:source-paths ["src"]}}
```

``` shell
clojure -X:codox
```

``` shell
bb -e "(clojure.java.browse/browse-url \"target/doc/index.html\")"
```
