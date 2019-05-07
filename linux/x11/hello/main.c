#include <X11/Xlib.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
int main(void) {
    Display *display;
    Window window;
    XEvent evt;
    const char *msg = "Hello, World!";
    int screen;
 
    display = XOpenDisplay(NULL);
    if (display == NULL) {
	fprintf(stderr, "Cannot open display\n");
	exit(1);
    }
 
    screen = DefaultScreen(display);
    window = XCreateSimpleWindow(display, RootWindow(display, screen), 10, 10, 100, 100, 1,
				 BlackPixel(display, screen), WhitePixel(display, screen));
    XSelectInput(display, window, ExposureMask | KeyPressMask);
    XMapWindow(display, window);
 
    while (1) {
	XNextEvent(display, &evt);
	if (evt.type == Expose) {
	    XFillRectangle(display, window, DefaultGC(display, screen), 20, 20, 10, 10);
	    XDrawString(display, window, DefaultGC(display, screen), 10, 50, msg, strlen(msg));
	}
	if (evt.type == KeyPress)
	    break;
    }
 
    XCloseDisplay(display);
    return 0;
}
