all: program

libhello.so:
	gcc -fPIC -shared -o $@ hello.c

program: libhello.so
	gcc -o $@ main.c -L. -lhello

clean:
	rm -rf program *.so


.PHONY: all clean
