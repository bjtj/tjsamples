vpath %.c src

all: prepare obj/program

prepare:
	mkdir -p obj

obj/program: obj/hello.o
	gcc -o $@ src/main.c $<

obj/%.o: %.c
	gcc -c -o $@ $<
