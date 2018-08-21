#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int main(int argc, char *argv[])
{
    int fd;
	char buffer[1024];
	char * myfifo = "/tmp/myfifo";
	unlink(myfifo);
	if (mkfifo(myfifo, 0666) != 0) {
		perror("mkfifo failed");
		return 1;
	}
	fd = open(myfifo, O_RDONLY);
	while (1) {
		int ret = read(fd, buffer, sizeof(buffer));
		if (ret < 0) {
			printf("fifo closed\n");
			break;
		} else if (ret == 0) {
			continue;
		}
		if (buffer[ret-1] == '\n') {
			printf("RECV: %s", buffer);
		} else {
			printf("RECV: %s\n", buffer);
		}
		
	}
	close(fd);
	
    return 0;
}
