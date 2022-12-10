#include <unistd.h>
#include <hiredis.h>
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdarg.h>

#define min(a, b) (a<b?a:b)

void print_reply(redisReply * reply)
{
  switch (reply->type) {
  case REDIS_REPLY_NIL:
    printf("[REPLY] (NIL)\n");
    break;
  case REDIS_REPLY_STATUS:
    printf("[REPLY] STATUS: %.*s\n", (int)reply->len, reply->str);
    break;
  case REDIS_REPLY_ARRAY:
  {
    size_t i;
    printf("[REPLY] ARRAY (size=%zd)\n", reply->elements);
    for (i = 0; i < reply->elements; ++i) {
      print_reply(reply->element[i]);
    }
  }
    break;
  case REDIS_REPLY_INTEGER:
    printf("[REPLY] INTEGER: %lld\n", reply->integer);
    break;
  case REDIS_REPLY_STRING:
    printf("[REPLY] STRING: %.*s\n", (int)min(reply->len, 80), reply->str);
    break;
  case REDIS_REPLY_ERROR:
    printf("[REPLY] ERROR: %.*s\n", (int)reply->len, reply->str);
    break;
  default:
    printf("[REPLY] UNKNOWN TYPE (type: %d)\n" ,reply->type);
    break;
  }
  
}

void cmd(redisContext * ctx, const char * cmd, ...)
{
  va_list arg_ptr;
  va_start(arg_ptr, cmd);
  printf("=> %s\n", cmd);
  redisReply * reply = redisvCommand(ctx, cmd, arg_ptr);
  if (!reply) {
    fprintf(stderr, "[REDIS] redisCommand() failed\n");
    exit(1);
  }
  va_end(arg_ptr);
  print_reply(reply);
  freeReplyObject(reply);
}

int main(int argc, char *argv[])
{
  const char * host = "localhost";
  int port = 6379;
  
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

  cmd(c, "xadd teststream * msg hello");
  cmd(c, "xread count 1 block 1000 streams teststream 0");
  cmd(c, "set msg hello");
  cmd(c, "get msg");

  redisFree(c);
  
  return 0;
}
