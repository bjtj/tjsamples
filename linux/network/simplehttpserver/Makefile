.PHONY: http-parser-test simple-http-server single-thread-http-server

all: simple-http-server

http-parser-test:
	gcc -o $@ $@.c http-parser.c

simple-http-server:
	gcc -o $@ $@.c

single-thread-http-server:
	gcc -o $@ $@.c http-parser.c

clean:
	rm -rf http-parser-test simple-http-server single-thread-http-server
