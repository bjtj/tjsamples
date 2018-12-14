CFLAGS=-I/usr/include/python2.7 -I/usr/local/lib/python2.7/dist-packages/numpy/core/include/

all: cyinfer.so

cyinfer.c:
	cython cyinfer.pyx

cyinfer.so: cyinfer.c
	gcc -shared -fPIC -fwrapv -Wall -fno-strict-aliasing $(CFLAGS) -o $@ cyinfer.c infer.c infer.h

clean:
	rm -rf cyinfer.so cyinfer.c
