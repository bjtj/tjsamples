CLJS ?= cljs

all: run

build:
	$(CLJS) --optimizations advanced --compile hello-world.core

run:
	$(CLJS) --compile hello-world.core --repl

serve:
	$(CLJS) --serve

help:
	$(CLJS) --help

.PHONY: all build serve help
