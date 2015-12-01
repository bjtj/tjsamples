#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <arpa/inet.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/socket.h>
#include <ifaddrs.h>

#include <netdb.h>
#include <netinet/in.h>

int main(int argc, char *args[]) {

	struct addrinfo hints;
	struct addrinfo * res = NULL;
	int sock;
	char buffer[1024] = {0,};

	memset(&hints, 0, sizeof(hints));
	hints.ai_family = AF_UNSPEC;
	hints.ai_socktype = SOCK_STREAM;
	if (getaddrinfo("127.0.0.1", "9000", &hints, &res) < 0) {
		perror("getaddrinfo()");
		return 1;
	}

	sock = socket(res->ai_family, res->ai_socktype, res->ai_protocol);
	if (sock < 0) {
		perror("socket()");
		return 1;
	}

	if (connect(sock, res->ai_addr, res->ai_addrlen) < 0) {
		perror("connect()");
		return 1;
	}

	freeaddrinfo(res);

	read(sock, buffer, sizeof(buffer));
	printf("Read: %s\n", buffer);

	close(sock);
	
    return 0;
}
