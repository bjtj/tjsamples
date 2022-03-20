#include <unistd.h>
#include "hiredis_cluster/hircluster.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char **argv) {

  if (argc < 3) {
    fprintf(stderr, "usage) %s <ip-address> <port> [<password>]\n", argv[0]);
    exit(1);
  }
  
  struct timeval timeout = {1, 500000}; // 1.5s

  char addr[256] = {0,};

  snprintf(addr, sizeof(addr), "%s:%s", argv[1], argv[2]);

  redisClusterContext *cc = redisClusterContextInit();
  redisClusterSetOptionAddNodes(cc, addr);
  redisClusterSetOptionConnectTimeout(cc, timeout);
  if (argc > 3) {
    redisClusterSetOptionPassword(cc, argv[3]);
  }
  
  redisClusterSetOptionRouteUseSlots(cc);
  redisClusterConnect2(cc);
  if (cc && cc->err) {
    printf("Error: %s\n", cc->errstr);
    // handle error
    exit(-1);
  }

  {
    redisReply *reply =
      (redisReply *)redisClusterCommand(cc, "SET %s %s", "key", "value");
    printf("SET: %s\n", reply->str);
    freeReplyObject(reply);
  }

  {
    redisReply *reply2 = (redisReply *)redisClusterCommand(cc, "GET %s", "key");
    printf("GET: %s\n", reply2->str);
    freeReplyObject(reply2);
  }

  redisClusterFree(cc);
  return 0;
}
