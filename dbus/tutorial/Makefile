#
# Makefile
#

all: server client

%.o: %.c
	gcc -Wall -c $< `pkg-config --cflags dbus-1`

server: server.o
	gcc server.o -o server `pkg-config --libs dbus-1`

client: client.o
	gcc client.o -o client `pkg-config --libs dbus-1`

.PHONY: clean
clean:
	rm *.o server client
