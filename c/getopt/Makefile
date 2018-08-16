all: short long

short:
	gcc -o short short.c

long:
	gcc -o long long.c


test:
	./short -t 1 -n hello
	./short -n "hello world"
	./short -t 2 -n hi
	./short -n test
	./long -abc x -d y
	./long -a -b

clean:
	rm -rf short long
