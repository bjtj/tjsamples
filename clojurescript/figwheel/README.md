# Figwheel #

<https://figwheel.org/>

Figwheel Main builds your ClojureScript code and hot loads it as you are coding!

## Quick Usage ##

<https://figwheel.org/#quick-usage>

``` shell
clj -Sdeps "{:deps {com.bhauman/figwheel-main {:mvn/version \"0.2.20\"}}}"  -M -m figwheel.main
```

deps.edn

``` clojure
{:deps {com.bhauman/figwheel-main {:mvn/version "0.2.20"}
        com.bhauman/rebel-readline-cljs {:mvn/version "0.1.4"}}
 ;; setup some development paths
 :paths ["src" "target" "resources"]
 ;; setup a helpful alias to start the build
 :aliases {:build-dev {:main-opts ["-m" "figwheel.main" "-b" "dev" "-r"]}}}
```
