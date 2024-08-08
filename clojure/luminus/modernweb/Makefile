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

clean:
	rm -rf node_modules

.PHONY: all repl uberjar war uberwar cljs-compile cljs-watch cljs-repl clean
