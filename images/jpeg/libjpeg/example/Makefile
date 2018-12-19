CFLAGS=`pkg-config --cflags libjpeg gl glu`
LDFLAGS=`pkg-config --libs libjpeg gl glu` -lglut

all:
	gcc -g -Wall -o example main.c $(CFLAGS) $(LDFLAGS)
