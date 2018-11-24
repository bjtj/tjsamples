CFLAGS=-I/usr/include/python3.5

all: hello.so

hello.c:
	cython hello.pyx

hello.so: hello.c
	gcc -shared -pthread -fPIC -fwrapv -Wall -fno-strict-aliasing $(CFLAGS) -o $@ hello.c

clean:
	rm -rf hello.so hello.c
