CFLAGS=-I/usr/include/python3.5 -I/usr/local/lib/python3.5/dist-packages/numpy/core/include/

all: cyStdDev.so

cyStdDev.c:
	cython cyStdDev.pyx

cyStdDev.so: cyStdDev.c std_dev.c std_dev.h
	gcc -shared -pthread -fPIC -fwrapv -Wall -fno-strict-aliasing $(CFLAGS) -o $@ cyStdDev.c std_dev.c std_dev.h

clean:
	rm -rf *.so cyStdDev.c
