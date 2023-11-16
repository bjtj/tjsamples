CLFAGS=`pkg-config --cflags sdl2`
LDLFAGS=`pkg-config --libs sdl2`

all:

main: main.c
	gcc -o $@ $< $(CLFAGS)

clean:
	rm -rf *.o main

.PHONY: all clean
