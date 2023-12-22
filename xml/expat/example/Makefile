CFLAGS=`pkg-config --cflags expat`
LDFLAGS=`pkg-config --libs expat`

PROGRAM=example

all: $(PROGRAM)

$(PROGRAM): example.c
	$(CC) -o $@ $< $(CFLAGS) $(LDFLAGS)

clean:
	rm -f $(PROGRAM)

.PHONY: all clean
