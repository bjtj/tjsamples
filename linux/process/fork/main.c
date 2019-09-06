#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>

int main(int argc, char *argv[])
{

    pid_t pid;
    printf("Start!\n");
    pid = fork();

    if (pid == 0) {
	printf("child: %d\n", pid);
    } else if (pid > 0) {
	printf("parent: %d\n", pid);
    } else {
	perror("fork is failed");
    }
    return 0;
}
