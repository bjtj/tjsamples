all:
	gcc -o capture main.c `pkg-config --cflags --libs libv4l2`

clean:
	rm -rf capture *.ppm
