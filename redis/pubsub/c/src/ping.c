#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <hiredis.h>

int main(int argc, char *argv[])
{
    redisContext * ctx;
    char * host = "localhost";
    int port = 6379;
    struct timeval timeout = {1, 500000};
    ctx = redisConnectWithTimeout(host, port, timeout);
    if (ctx == NULL || ctx->err) {
	if (ctx) {
	    fprintf(stderr, "[error] %s\n", ctx->errstr);
	    redisFree(ctx);
	} else {
	    fprintf(stderr, "[error] cannot allocate redis context\n");
	}
	exit(1);
    }

    {
	redisReply * reply = redisCommand(ctx, "PING");
	printf("PING: %s\n", reply->str);
	freeReplyObject(reply);
    }

    redisFree(ctx);
    
    return 0;
}
