all:

libhello.so: hello.c
	clang -shared -fpic -o $@ $<

prog: libhello.so
	clang -o $@ main.c -L./ -lhello

clean:
	rm -rf libhello.so
