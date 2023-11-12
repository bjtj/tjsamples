PROGRAM=example
CFLAGS=-Wall `pkg-config --cflags libxml-2.0`
LDFLAGS=`pkg-config --libs libxml-2.0`

all: $(PROGRAM)


$(PROGRAM): main.c
	$(CC) $(CFLAGS) -o $@ $< $(LDFLAGS)

clean:
	rm -rf $(PROGRAM) *.o


.PHONY: all clean
