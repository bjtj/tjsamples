CLJ ?= clj

all: quickstart

quickstart:
	$(CLJ) -X:quickstart

explain1:
	$(CLJ) -X:explain1

explain2:
	$(CLJ) -X:explain2

explain3:
	$(CLJ) -X:explain3

error1:
	$(CLJ) -X:error1

error2:
	$(CLJ) -X:error2

custom-error1:
	$(CLJ) -X:custom-error1

custom-error2:
	$(CLJ) -X:custom-error2

transform1:
	$(CLJ) -X:transform1

coerce1:
	$(CLJ) -X:coerce1

coerce2:
	$(CLJ) -X:coerce2

json1:
	$(CLJ) -X:json1

run:
	$(CLJ) -M:run-m

test:
	$(CLJ) -T:build test

clean:
	rm -rf target

.PHONY: all quickstart explain1 explain2 explain3 error1 error2 custom-error1 custom-error2 coerce1 coerce2 json1 run test clean
