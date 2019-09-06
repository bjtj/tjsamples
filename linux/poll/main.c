#include <unistd.h>
#include <sys/poll.h>
#include <stdio.h>

#define TIMEOUT 5

int main(int argc, char *argv[])
{
    struct pollfd fds[2];
    int ret;
    int i;

    fds[0].fd = STDIN_FILENO;
    fds[0].events = POLLIN;

    fds[1].fd = STDOUT_FILENO;
    fds[1].events = POLLOUT;

    ret = poll(fds, 2, TIMEOUT * 1000);
    if (ret == -1) {
	perror("poll error");
	return 1;
    }

    if (!ret) {
	printf("[OUT] %d seconds elapsed.\n", TIMEOUT);
	return 0;
    }

    if (fds[0].revents & POLLIN) {
	char buf[100];
	int len = 0;
	printf("[OUT] stdin is readable\n");
	len = read(fds[0].fd, buf, sizeof(buf));
	if (len < 0) {
	    perror("read() error");
	    return 1;
	}
	printf("[OUT] %d bytes read\n", len);
	printf("%.*s\n", len, buf);
    }

    if (fds[1].revents & POLLOUT) {
	printf("[OUT] stdout is writable\n");
    }

    return 0;
}
