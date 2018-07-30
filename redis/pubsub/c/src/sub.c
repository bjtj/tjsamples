#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <hiredis.h>

void print_reply(redisReply * reply) {
    switch (reply->type) {
    case REDIS_REPLY_STATUS:
	fprintf(stdout, "[reply] type: REDIS_REPLY_STATUS(%d)\n", reply->type);
	break;
    case REDIS_REPLY_ERROR:
	fprintf(stdout, "[reply] type: REDIS_REPLY_ERROR(%d)\n", reply->type);
	break;
    case REDIS_REPLY_INTEGER:
	fprintf(stdout, "[reply] type: REDIS_REPLY_INTEGER(%d)\n", reply->type);
	break;
    case REDIS_REPLY_NIL:
	fprintf(stdout, "[reply] type: REDIS_REPLY_NIL(%d)\n", reply->type);
	break;
    case REDIS_REPLY_STRING:
	fprintf(stdout, "[reply] type: REDIS_REPLY_STRING(%d) '%s'\n", reply->type, reply->str);
	break;
    case REDIS_REPLY_ARRAY:
    {
	int i;
	fprintf(stdout, "[reply] type: REDIS_REPLY_ARRAY(%d), count: %lu\n",
		reply->type, reply->elements);
	for (i = 0; i < reply->elements; ++i) {
	    redisReply * element = reply->element[i];
	    print_reply(element);
	}
    }
    break;
    default:
	break;
    }
}

int main(int argc, char *argv[])
{
    redisContext * ctx;
    const char * host = "localhost";
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
	redisReply * reply = redisCommand(ctx, "SUBSCRIBE my-channel");
	freeReplyObject(reply);
	fprintf(stdout, "[listen]\n");
	while (redisGetReply(ctx, (void**)&reply) == REDIS_OK) {
	    if (reply == NULL && ctx->err) {
		fprintf(stderr, "[error] %s\n", ctx->errstr);
		break;
	    }
	    print_reply(reply);
	    
	    freeReplyObject(reply);
	}
    }

    redisFree(ctx);
    
    return 0;
}
