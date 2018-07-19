#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

int main(int argc, char *argv[])
{
    const char * host = "127.0.0.1";
    int port;
    char buffer[1024] = {0,};
    struct sockaddr_in addr;
    socklen_t addr_len;
    int len;
    int sock;

    if (argc != 2) {
	printf("usage: %s <port>\n", argv[0]);
	exit(1);
    }
    port = atoi(argv[1]);
    
    sock = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    assert(sock >= 0);

    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr(host);
    addr.sin_port = htons(port);
    snprintf(buffer, sizeof(buffer), "hello");

    printf("SEND(%ld) to '%s:%d'\n", strlen(buffer), inet_ntoa(addr.sin_addr), ntohs(addr.sin_port));
    sendto(sock, buffer, strlen(buffer), 0, (struct sockaddr*)&addr, sizeof(addr));

    len = recvfrom(sock, buffer, sizeof(buffer), 0, (struct sockaddr*)&addr, &addr_len);
    assert(len >= 0);

    printf("RECV(%d) from '%s:%d'\n", len, inet_ntoa(addr.sin_addr), ntohs(addr.sin_port));
    printf("%s\n", buffer);
    
    return 0;
}
