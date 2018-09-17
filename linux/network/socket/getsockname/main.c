#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>


int main(int argc, char *argv[])
{

	int sock;
	struct sockaddr_in addr;
	struct sockaddr_in actual_addr;
	socklen_t addr_len;

	sock = socket(AF_INET, SOCK_STREAM, 0);
	if (sock < 0) {
		perror("sock() error");
		exit(1);
	}

	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_ANY);
	addr.sin_port = htons(0);

	if (bind(sock, (struct sockaddr*)&addr, sizeof(addr)) != 0) {
		perror("bind() error");
		exit(1);
	}

	if (listen(sock, 5) != 0) {
		perror("listen() error");
		exit(1);
	}

	memset(&actual_addr, 0, sizeof(actual_addr));
	addr_len = sizeof(actual_addr);
	if (getsockname(sock, (struct sockaddr*)&actual_addr, &addr_len) != 0) {
		perror("getsockname() error");
		exit(1);
	}

	printf("port: %d\n", actual_addr.sin_port);

	close(sock);
    
    return 0;
}

