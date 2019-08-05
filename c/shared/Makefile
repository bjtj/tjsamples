
all: program

libhello.so:
	gcc -fPIC -shared -o $@ hello.c

program: libhello.so
	gcc -o $@ main.c -lhello

clean:
	rm -rf program *.so
