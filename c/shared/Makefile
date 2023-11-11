all: program

libhello.so:
	gcc -fPIC -shared -o $@ hello.c

program: main.c
	gcc -o $@ main.c -ldl

clean:
	rm -rf program *.so

.PHONY: all clean
