CFLAGS=-Wall
LDFLAGS=`pkg-config --cflags --libs hiredis`

.PHONY: all ping pub sub clean

all: ping sub pub

ping:
	gcc -o $@ src/ping.c $(CFLAGS) $(LDFLAGS)

pub:
	gcc -o $@ src/pub.c $(CFLAGS) $(LDFLAGS)

sub:
	gcc -o $@ src/sub.c $(CFLAGS) $(LDFLAGS)


clean:
	rm -rf ping pub sub
