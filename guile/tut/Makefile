CFLAGS = `guile-config compile`
LIBS = -lm `guile-config link`

.PHONY: clean build run

build: tortoise

clean:
	rm -rf tortoise tortoise.o

run: tortoise
	./tortoise

tortoise: tortoise.o
	gcc $< -o $@ $(LIBS)

tortoise.o: tortoise.c
	gcc -c $< -o $@ $(CFLAGS)
