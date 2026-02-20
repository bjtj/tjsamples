# shadow-cljs + express js example

1. start shadow-cljs server (using deps.edn)

``` shell
clojure -M:shadow-cljs watch app
```

or (using npx)

``` shell
npx shadow-cljs watch app
```

2. start a runtime (it will automatically connect to shadow-cljs server)

<https://shadow-cljs.github.io/docs/UsersGuide.html#repl-trouble-node>

``` shell
node build/app.js
```

## CIDER

<https://docs.cider.mx/cider/cljs/shadow-cljs.html>

```
M-x cider-connect-cljs RET shadow RET :app RET
```
