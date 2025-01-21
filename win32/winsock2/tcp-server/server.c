#define WIN32_LEAN_AND_MEAN
#include <Windows.h>
#include <WinSock2.h>
#include <WS2tcpip.h>

#pragma comment(lib, "Ws2_32.lib")

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

static WSADATA wsaData;

int main()
{
	SOCKET sock;
	int client;
	struct sockaddr_in addr;
	struct sockaddr_in client_addr;
	socklen_t addr_len = sizeof(addr);
	int bind_port = 9000;
	int on = 1;
	char buffer[1024] = {0,};
	size_t read_len;
	const char * response = "HTTP/1.1 200 OK\r\nContent-Length: 5\r\nContent-Type: text/plain\r\n\r\nHello";

	assert(WSAStartup(MAKEWORD(2, 2), &wsaData) == 0);

	assert((sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)) != INVALID_SOCKET);
	assert(setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, (void*)&on, sizeof(on)) != SOCKET_ERROR);

	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_ANY);
	addr.sin_port = htons(bind_port);
	assert(bind(sock, (struct sockaddr*)&addr, addr_len) != SOCKET_ERROR);

	assert(listen(sock, 5) != SOCKET_ERROR);

	assert((client = accept(sock, (struct sockaddr*)&client_addr, &addr_len)) != INVALID_SOCKET);

	read_len = recv(client, buffer, sizeof(buffer), 0);
	printf("RECV(%zu): %s\n", read_len, buffer);

	send(client, response, strlen(response), 0);

	closesocket(client);
	closesocket(sock);

	WSACleanup();
	
	return 0;
}
