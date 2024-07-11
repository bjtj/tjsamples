all: repl

run:
	lein run

repl:
	lein repl

uberjar:
	lein uberjar

cljs-compile:
	npx shadow-cljs compile app

cljs-watch:
	npx shadow-cljs watch app

cljs-repl:
	npx shadow-cljs cljs-repl app


.PHONY: all repl uberjar war uberwar cljs-compile cljs-watch cljs-repl
