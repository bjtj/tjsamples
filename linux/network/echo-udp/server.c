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

    char buffer[1024] = {0,};
    struct sockaddr_in remote_addr;
    socklen_t remote_addr_len;
    socklen_t len;
    struct sockaddr_in addr;
    int sock = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    assert(sock >= 0);

    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = htonl(INADDR_ANY);
    addr.sin_port = htons(0);

    assert(bind(sock, (struct sockaddr*)&addr, sizeof(addr)) == 0);

    memset(&addr, 0, sizeof(addr));
    len = sizeof(addr);
    assert(getsockname(sock, (struct sockaddr*)&addr, &len) == 0);

    printf("UDP server listen port: %d\n", ntohs(addr.sin_port));

    len = recvfrom(sock, buffer, sizeof(buffer), 0, (struct sockaddr*)&remote_addr, &remote_addr_len);
    assert(len >= 0);

    printf("RECV(%d) from '%s:%d'\n", len, inet_ntoa(remote_addr.sin_addr), ntohs(remote_addr.sin_port));
    printf("%s\n", buffer);

    sleep(1);

    printf("SEND(%d) to '%s:%d'\n", len, inet_ntoa(remote_addr.sin_addr), ntohs(remote_addr.sin_port));
    sendto(sock, buffer, len, 0, (struct sockaddr*)&remote_addr, remote_addr_len);

    close(sock);
    
    return 0;
}
