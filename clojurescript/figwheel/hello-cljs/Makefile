CLJ ?= clj

all: basic

basic:
	$(CLJ) -M -m figwheel.main

compile:
	$(CLJ) -M -m figwheel.main --compile hello.cruel-world --repl

cruel:
	$(CLJ) -M -m figwheel.main --build cruel --repl

optimize:
	$(CLJ) -M -m figwheel.main --optimizations whitespace --build-once cruel

.PHONY: all basic

