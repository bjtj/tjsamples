CC=gcc
PROG_WRITER=writer
PROG_READER=reader
LDFLAGS=-lrt
OBJS=shm.o

all: $(PROG_WRITER) $(PROG_READER)

$(PROG_WRITER): writer.c $(OBJS)
	$(CC) -o $@ writer.c $(OBJS) $(LDFLAGS)

$(PROG_READER): reader.c $(OBJS)
	$(CC) -o $@ reader.c $(OBJS) $(LDFLAGS)

%.o: %.c
	$(CC) -c -o $@ $<

clean:
	rm -rf $(PROG_WRITER) $(PROG_READER) *.o
