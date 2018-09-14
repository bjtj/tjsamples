/* https://linuxtv.org/downloads/v4l-dvb-apis/uapi/v4l/v4l2grab.c.html */

#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <errno.h>
#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/time.h>
#include <sys/mman.h>
#include <linux/videodev2.h>
#include <libv4l2.h>


struct buffer
{
    void * start;
    size_t length;
};

#define BUFFER_COUNT 2


int main(int argc, char *argv[])
{
    struct v4l2_format fmt;
    struct v4l2_buffer buf;
    struct v4l2_requestbuffers req;
    enum v4l2_buf_type type;
    fd_set fds;
    struct timeval tv;
    unsigned int i;
    struct buffer buffers[BUFFER_COUNT] = {0,};
    
    int fd;
    fd = v4l2_open("/dev/video0", O_RDWR | O_NONBLOCK, 0);
    if (fd < 0) {
	perror("cannot open device");
	exit(1);
    }

    memset(&fmt, 0, sizeof(fmt));
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 640;
    fmt.fmt.pix.height = 480;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_RGB24;
    fmt.fmt.pix.field = V4L2_FIELD_INTERLACED;
    if (v4l2_ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
	fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	exit(1);
    }


    memset(&req, 0, sizeof(req));
    req.count = BUFFER_COUNT;
    req.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    req.memory = V4L2_MEMORY_MMAP;
    if (v4l2_ioctl(fd, VIDIOC_REQBUFS, &req) < 0) {
	fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	exit(1);
    }


    for (i = 0; i < req.count; ++i) {
	memset(&buf, 0, sizeof(buf));
	buf.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = V4L2_MEMORY_MMAP;
	buf.index = i;

	if (v4l2_ioctl(fd, VIDIOC_QUERYBUF, &buf) < 0) {
	    fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	    exit(1);
	}

	buffers[i].length = buf.length;
	buffers[i].start = v4l2_mmap(NULL, buf.length, PROT_READ | PROT_WRITE, MAP_SHARED,
				     fd, buf.m.offset);

	if (MAP_FAILED == buffers[i].start) {
	    perror("mmap");
	    exit(1);
	}
    }

    for (i = 0; i < req.count; ++i) {
	memset(&buf, 0, sizeof(buf));
	buf.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = V4L2_MEMORY_MMAP;
	buf.index = i;
	if (v4l2_ioctl(fd, VIDIOC_QBUF, &buf) < 0) {
	    fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	    exit(1);
	}
    }

    type = V4L2_BUF_TYPE_VIDEO_CAPTURE;

    if (v4l2_ioctl(fd, VIDIOC_STREAMON, &type) < 0) {
	fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	exit(1);
    }

    for (i = 0; i < 20; ++i) {

	int r;

	do {
	    FD_ZERO(&fds);
	    FD_SET(fd, &fds);
	    tv.tv_sec = 2;
	    tv.tv_usec = 0;
	    r = select(fd+1, &fds, NULL, NULL, &tv);
	} while ((r == -1 && errno == EINTR));

	if (r == -1) {
	    perror("select");
	    return errno;
	}


	memset(&buf, 0, sizeof(buf));
	buf.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
	buf.memory = V4L2_MEMORY_MMAP;
	if (v4l2_ioctl(fd, VIDIOC_DQBUF, &buf) < 0) {
	    fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	    exit(1);
	}

	/* write to file or display */
	{
	    FILE * fout;
	    char out_name[1024] = {0,};
	    /* ppm - http://netpbm.sourceforge.net/doc/ppm.html */
	    snprintf(out_name, sizeof(out_name), "%03d.ppm", i);
	    fout = fopen(out_name, "w");
	    if (!fout) {
		perror("fopen");
		exit(1);
	    }
	    fprintf(fout, "P6\n%d %d 255\n",
		    fmt.fmt.pix.width, fmt.fmt.pix.height);
	    fwrite(buffers[buf.index].start, buf.bytesused, 1, fout);
	    fclose(fout);
	}

	if (v4l2_ioctl(fd, VIDIOC_QBUF, &buf) < 0) {
	    fprintf(stderr, "error %d, %s\n", errno, strerror(errno));
	    exit(1);
	}
    }

    v4l2_close(fd);
    return 0;
}
