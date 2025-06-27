all: run

run:
	lein run

repl:
	lein repl

migrate:
	lein run migrate

uberjar:
	lein uberjar

war:
	lein immutant war

uberwar:
	lein uberwar

cljs-compile:
# npx shadow-cljs compile app
	lein run -m shadow.cljs.devtools.cli --npm compile app

cljs-watch:
# npx shadow-cljs watch app
	lein run -m shadow.cljs.devtools.cli --npm watch app

cljs-repl:
	npx shadow-cljs cljs-repl app

clean:
	rm -rf node_modules target

.PHONY:	all run repl uberjar war uberwar cljs-compile cljs-watch cljs-repl clean
