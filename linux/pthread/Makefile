LD_FLAGS=-lpthread
CFLAGS=-pthread

all: prog

prog: main.c
	gcc -g -Wall -o $@ $< ${CFLAGS} ${LD_FLAGS}

check: prog
	valgrind --leak-check=full --show-leak-kinds=all ./prog

clean:
	rm -rf prog
