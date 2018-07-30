#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <hiredis.h>

int main(int argc, char *argv[])
{
    redisContext * ctx;
    const char * host = "localhost";
    int port = 6379;
    struct timeval timeout = {1, 500000};

    if (argc != 3) {
	fprintf(stderr, "usage: %s <name> <message>\n", argv[0]);
	exit(1);
    }
    
    ctx = redisConnectWithTimeout(host, port, timeout);
    if (ctx == NULL || ctx->err) {
	if (ctx) {
	    fprintf(stderr, "[error] %s\n", ctx->errstr);
	} else {
	    fprintf(stderr, "[error] cannot allocate redis context\n");
	}
	exit(1);
    }

    {
	redisReply * reply = redisCommand(ctx, "PUBLISH %s %s", argv[1], argv[2]);
	freeReplyObject(reply);
    }

    redisFree(ctx);
    return 0;
}

