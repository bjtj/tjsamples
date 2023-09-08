CC=gcc
PROG_WRITER=writer
PROG_READER=reader
OBJS=shm.o

all: $(PROG_WRITER) $(PROG_READER)

$(PROG_WRITER): writer.c $(OBJS)
	$(CC) -o $@ writer.c $(OBJS)

$(PROG_READER): reader.c $(OBJS)
	$(CC) -o $@ reader.c $(OBJS)

%.o: %.c
	$(CC) -c -o $@ $<

clean:
	rm -rf $(PROG_WRITER) $(PROG_READER) *.o
