CFLAGS=`pkg-config --cflags libsoup-2.4`
LDFLAGS=`pkg-config --libs libsoup-2.4`

.PHONY: all app clean

all: app

app:
	gcc -Wall $(CFLAGS) main.c -o $@ $(LDFLAGS)

clean:
	rm -rf app
