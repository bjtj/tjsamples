all: hello

hello.s: hello.c
	gcc -S hello.c

hello.o: hello.s
	as $< -o $@

hello: hello.o
	gcc -o $@ $<

clean:
	rm -rf *.o *.s hello
