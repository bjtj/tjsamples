CFLAGS=`pkg-config --cflags glib-2.0`
LDFLAGS=`pkg-config --libs glib-2.0`

.PHONY: all app clean

all: app

app:
	gcc -Wall $(CFLAGS) main.c -o $@ $(LDFLAGS)

clean:
	rm -rf app
