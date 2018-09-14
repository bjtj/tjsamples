/* https://linuxtv.org/downloads/v4l-dvb-apis/uapi/v4l/v4l2grab.c.html */

#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <libv4l2.h>


int main(int argc, char *argv[])
{
    int fd;
    fd = v4l2_open("/dev/video0", O_RDWR | O_NONBLOCK, 0);
    if (fd < 0) {
	perror("cannot open device");
	exit(1);
    }

    v4l2_close(fd);
    return 0;
}
