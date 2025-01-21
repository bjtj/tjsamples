#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <arpa/inet.h>
#include <sys/socket.h>

int main()
{
	int sock;
	int client;
	struct sockaddr_in addr;
	struct sockaddr_in client_addr;
	socklen_t addr_len = sizeof(addr);
	int bind_port = 9000;
	int on = 1;
	char buffer[1024] = {0,};
	size_t read_len;
	const char * response = "HTTP/1.1 200 OK\r\nContent-Length: 5\r\nContent-Type: text/plain\r\n\r\nHello";

	assert((sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) >= 0);
	assert(setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, (void*)&on, sizeof(on)) == 0);

	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_ANY);
	addr.sin_port = htons(bind_port);
	assert(bind(sock, (struct sockaddr*)&addr, addr_len) == 0);

	assert(listen(sock, 5) == 0);

	assert((client = accept(sock, (struct sockaddr*)&client_addr, &addr_len)) >= 0);

	read_len = recv(client, buffer, sizeof(buffer), 0);
	printf("RECV(%zu): %s\n", read_len, buffer);

	send(client, response, strlen(response), 0);

	close(client);
	close(sock);
	
	return 0;
}
