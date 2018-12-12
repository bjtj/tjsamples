
all: shared program

shared:
	gcc -fpic -shared -o libhello.so hello.c

program:
	gcc -o program main.c -lhello
