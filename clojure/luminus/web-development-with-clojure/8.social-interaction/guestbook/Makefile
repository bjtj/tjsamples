all: repl

repl:
	lein repl

uberjar:
	lein uberjar

war:
	lein immutant war

uberwar:
	lein uberwar

cljs-compile:
	npx shadow-cljs compile app

cljs-watch:
	npx shadow-cljs watch app

cljs-repl:
	npx shadow-cljs cljs-repl app

.PHONY:
	all repl uberjar war uberwar
