CLJS ?= clj -M --main cljs.main

NPM ?= npm

all: run

build:
	$(CLJS) --optimizations advanced --compile hello-world.core

run:
	$(CLJS) --compile hello-world.core --repl

serve:
	$(CLJS) --serve

help:
	$(CLJS) --help

prepare-bundle:
	$(NPM) install source-map-support

bundle-browser:
	$(CLJS) --output-to main.js --compile hello-world.core

bundle-node:
	$(CLJS) --target node --output-to main.js --compile hello-world.core

.PHONY: all build run serve help prepare-bundle bundle-browser bundle-node
