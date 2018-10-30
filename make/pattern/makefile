OBJS = a.o b.o

all: hello

hello: $(OBJS)
	gcc -o $@ main.c $(OBJS)

%.o: %.c
	gcc -c -o $@ $<

clean:
	rm -rf hello $(OBJS)
