CLJ ?= clj

all: test

run:
	$(CLJ) -M:run-m

test:
	$(CLJ) -T:build test

clean:
	rm -rf target

.PHONY: all run test clean
