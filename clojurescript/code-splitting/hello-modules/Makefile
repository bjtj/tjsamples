CLJ?=clj

all: build

build:
	$(CLJ) -M -m cljs.main -v -co build.edn -c -s

release:
	$(CLJ) -M -m cljs.main -co build.edn -O advanced -c -s

.PHONY: all build release
