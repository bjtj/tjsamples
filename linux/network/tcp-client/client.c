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
	struct sockaddr_in remote_addr;
	const char * ip_host = "127.0.0.1";
	int ip_port = 9000;
	char buffer[1024] = {0,};
	size_t read_len;
	const char * request = "GET / HTTP/1.1\r\nContent-Length: 0\r\n\r\n";

	assert((sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) >= 0);
	
	memset(&remote_addr, 0, sizeof(remote_addr));
	remote_addr.sin_family = AF_INET;
	remote_addr.sin_addr.s_addr = inet_addr(ip_host);
	remote_addr.sin_port = htons(ip_port);

	assert(connect(sock, (struct sockaddr*)&remote_addr, sizeof(remote_addr)) == 0);

	send(sock, request, strlen(request), 0);

	read_len = recv(sock, buffer, sizeof(buffer), 0);
	printf("RECV(%zu): %s \n", read_len, buffer);

	close(sock);
	
	return 0;
}
