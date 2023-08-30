
all: run

%.js: %.ts
	tsc --removeComments $<

run: main.js
	node main.js

clean:
	rm -rf *.js

.PHONY: all run clean
