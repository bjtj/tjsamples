CLJ ?= clj
CLJS ?= clj -M --main cljs.main

all:

run:
	$(CLJ) -M:run-m

cljs-repl:
	$(CLJS) --compile getting-started.hello --repl

.PHONY: all run cljs-repl
