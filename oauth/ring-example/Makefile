CLJ ?= clj

all: nrepl

nrepl:
	$(CLJ) -M:nrepl -m nrepl.cmdline --port 7888 --middleware "[cider.nrepl/cider-middleware]"
