#include <unistd.h>
#include <sys/types.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    printf("[OUT] Executing 'ls -l'\n");
    execl("/bin/ls", "ls", "-l", (char*)NULL);
    perror("execl failed");
    exit(1);
}
