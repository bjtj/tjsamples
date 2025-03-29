# shadow-cljs #

<https://github.com/thheller/shadow-cljs>

## Quick Start ##

<https://github.com/thheller/shadow-cljs?tab=readme-ov-file>

``` shell
$ npx create-cljs-project acme-app
npx: installed 1 in 5.887s
shadow-cljs - creating project: .../acme-app
Creating: .../acme-app/package.json
Creating: .../acme-app/shadow-cljs.edn
Creating: .../acme-app/.gitignore
Creating: .../acme-app/src/main
Creating: .../acme-app/src/test
----
Installing shadow-cljs in project.

npm notice created a lockfile as package-lock.json. You should commit this file.
+ shadow-cljs@<version>
added 88 packages from 103 contributors and audited 636 packages in 6.287s
found 0 vulnerabilities

----
Done.
----
```

## Shadow CLJS User’s Guide ##

<https://shadow-cljs.github.io/docs/UsersGuide.html>

``` clojure
;; shadow-cljs watch foo
(shadow.cljs.devtools.api/watch :foo)
;; this is identical, due to the provided ns alias
(shadow/watch :foo)
;; shadow-cljs watch foo --verbose
(shadow/watch :foo {:verbose true})
;; shadow-cljs compile foo
(shadow/compile :foo)
;; shadow-cljs release foo
(shadow/release :foo)

;; shadow-cljs browser-repl
(shadow/browser-repl)
;; shadow-cljs node-repl
(shadow/node-repl)
;; shadow-cljs cljs-repl foo
(shadow/repl :foo)

;; Once you are in a CLJS REPL you can use
:repl/quit
;; or
:cljs/quit
;; to drop back down to CLJ.
```
