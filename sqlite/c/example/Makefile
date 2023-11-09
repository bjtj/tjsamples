OBJS=sqlite3.o
CC=gcc
CFLAGS=-I sqlite3

all: main

main: main.c $(OBJS)
	$(CC) -o $@ $< $(CFLAGS) $(OBJS)

sqlite3.o: sqlite3/sqlite3.c
	$(CC) -o $@ -c $< $(CFLAGS)

clean:
	rm -rf *.o main
