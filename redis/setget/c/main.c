#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <hiredis.h>

int main(int argc, char *argv[])
{
    redisContext * ctx;
    const char * host = "localhost";
    int port = 6379;
    struct timeval timeout = {1, 500000};
    redisReply * reply;
    int exists = 0;

    ctx = redisConnectWithTimeout(host, port, timeout);

    reply = redisCommand(ctx, "exists mylist");
    if (reply->type == REDIS_REPLY_INTEGER) {
	exists = reply->integer > 0;
	printf("exists userlist? %s\n", (exists ? "yes" : "no"));
    }
    freeReplyObject(reply);

    if (exists) {
	printf("mylist already exists\n");
    } else {
	redisCommand(ctx, "rpush mylist %s", "item1");
    }
    reply = redisCommand(ctx, "lrange mylist 0 -1");
    if (reply->type == REDIS_REPLY_ARRAY) {
	int i;
	for (i = 0; i < reply->elements; ++i) {
	    printf("%u) %s\n", i, reply->element[i]->str);
	}
    }
    freeReplyObject(reply);

    redisFree(ctx);
    
    return 0;
}
