CLJ ?= clojure

all: run

run:
	$(CLJ) -M:run-m

nrepl:
	$(CLJ) -M:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware]"
