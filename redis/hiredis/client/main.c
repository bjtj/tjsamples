#include <unistd.h>
#include <hiredis.h>
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdarg.h>

void cmd(redisContext * ctx, const char * cmd, ...)
{
  va_list arg_ptr;
  va_start(arg_ptr, cmd);
  redisReply * reply = redisvCommand(ctx, cmd, arg_ptr);
  if (!reply) {
    fprintf(stderr, "[REDIS] redisCommand() failed\n");
    exit(1);
  }
  va_end(arg_ptr);
  switch (reply->type) {
  case REDIS_REPLY_STRING:
  case REDIS_REPLY_ERROR:
    printf("Reply: %s\n", reply->str);
    break;
  default:
    break;
  }
  freeReplyObject(reply);
}

int main(int argc, char *argv[])
{
  const char * host = "localhost";
  int port = 6379;

  redisOptions options = {0,};
  options.endpoint.tcp.ip = host;
  options.endpoint.tcp.port = port;
  
  redisContext *c = redisConnect(host, port);
  if (c == NULL || c->err) {
    if (c) {
      fprintf(stderr, "[REDIS] Error: %s\n", c->errstr);
      // handle error
    } else {
      fprintf(stderr, "[REDIS] Can't allocate redis context\n");
    }
    exit(1);
  }

  cmd(c, "set msg hello");
  cmd(c, "get msg");

  redisFree(c);
  
  return 0;
}
