# Shadow CLJS User’s Guide #

<https://shadow-cljs.github.io/docs/UsersGuide.html>

## start repl ##

``` shell
$ npm run repl # `npx shadow-cljs clj-repl`

> acme-app@0.0.1 repl
> shadow-cljs clj-repl

shadow-cljs - config: c:\acme-app\shadow-cljs.edn
shadow-cljs - HTTP server available at http://localhost:8080
shadow-cljs - server version: 2.28.22 running at http://localhost:9630
shadow-cljs - nREPL server started on port 50260
shadow-cljs - REPL - see (help)
To quit, type: :repl/quit
shadow.user=> 
```

## watch ##

``` clojure
;; e.g.) connect to nrepl...

(shadow/watch :frontend)
(shadow/watch :server)
```

## start runtime ##

node

``` shell
node target/server.js
```

browser

```
http://localhost:8080
```

## connect to runtime ##

CIDER will automatically connect to .cljs files.

``` clojure
(do (require 'shadow.cljs.devtools.api) (shadow.cljs.devtools.api/nrepl-select :frontend))

;; or

(do (require 'shadow.cljs.devtools.api) (shadow.cljs.devtools.api/nrepl-select :server))

;; To quit, type: :cljs/quit
```
