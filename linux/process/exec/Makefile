all: exec fork-exec

exec: exec.c
	gcc -g -Wall -o $@ $<

fork-exec: fork-exec.c
	gcc -g -Wall -o $@ $<

clean:
	rm -rf exec fork-exec
