all: prepare obj/program

prepare:
	mkdir -p obj

obj/program: obj/hello.o
	gcc -o $@ main.c $<

obj/hello.o: hello.c
	gcc -c -o $@ hello.c
