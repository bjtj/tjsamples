# ClojureScript #

<https://clojurescript.org/index>


## Quick Start ##

<https://clojurescript.org/guides/quick-start>

`--repl-opts "{:launch-browser false}"`

e.g.) disabling browser auto-launch

``` shell
clj -M --main cljs.main --repl-opts "{:launch-browser false}" --compile hello-world.core --repl
```

## CLJSJS ##

<https://cljsjs.github.io/>

CLJSJS provides an easy way for ClojureScript developers to depend on Javascript libraries.



## New shadow cljs project ##

``` shell
neil new 
neil add shadow-cljs --browser
```
