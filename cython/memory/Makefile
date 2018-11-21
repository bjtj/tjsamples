CFLAGS=-I/usr/include/python3.5

all: cmem.so

cmem.c:
	cython cmem.pyx

cmem.so: cmem.c
	gcc -shared -pthread -fPIC -fwrapv -Wall -fno-strict-aliasing $(CFLAGS) -o $@ cmem.c

clean:
	rm -rf *.so cmem.c
