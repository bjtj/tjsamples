all: greeter.js

%.js: %.ts
	tsc --removeComments $<

run:
	php -S "localhost:8000"

clean:
	rm -rf *.js
