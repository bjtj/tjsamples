CFLAGS=`pkg-config --cflags libavcodec libavutil`
LDFLAGS=`pkg-config --libs libavcodec libavutil`
PROGRAM=prog


all: $(PROGRAM)

$(PROGRAM): main.c
	$(CC) -Wall -o $@ main.c $(CFLAGS) $(LDFLAGS)

test: $(PROGRAM)
	./prog frame-001.h264 libx264

clean:
	rm -rf $(PROGRAM) *.h264

.PHONY: all test clean
