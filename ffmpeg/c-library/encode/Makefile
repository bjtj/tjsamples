CFLAGS=`pkg-config --cflags libavcodec libavutil`
LDFLAGS=`pkg-config --libs libavcodec libavutil`

all: prog

prog: main.c
	$(CC) -o $@ main.c $(CFLAGS) $(LDFLAGS)
