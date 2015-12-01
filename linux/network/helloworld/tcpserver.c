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

	int port = 9000;
	struct sockaddr_in addr;
	struct sockaddr_in client_addr;
	socklen_t client_addr_len;
	
	int sock = socket(AF_INET, SOCK_STREAM, 0);
	int client_sock;

	const char * message = "Welcome and Bye~";

	int on = 1;
	if (setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, (const char*)&on, sizeof(on)) != 0) {
		perror("setsockopt()");
		return 1;
	}

	memset(&addr, 0, sizeof(addr));
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_ANY);
	addr.sin_port = htons(port);

	if (bind(sock, (struct sockaddr*)&addr, sizeof(addr)) != 0) {
		perror("bind()");
		return 1;
	}

	if (listen(sock, 5) < 0) {
		perror("listen()");
		return 1;
	}

	printf("wait client...\n");

	client_sock = accept(sock, (struct sockaddr*)&client_addr, &client_addr_len);
	if (client_sock < 0) {
		perror("accept()");
		return 1;
	}
	
	write(client_sock, message, strlen(message));

	close(client_sock);
	close(sock);
	
    return 0;
}
