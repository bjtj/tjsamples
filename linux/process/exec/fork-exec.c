#include <unistd.h>
#include <sys/types.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <sys/wait.h>

int main(int argc, char *argv[])
{

    pid_t pid;
    pid = fork();

    if (pid == 0) {
	printf("[OUT] Executing 'ls -l'\n");
	execl("/bin/ls", "ls", "-l", (char*)NULL);
	perror("execl failed");
	exit(1);
    } else if (pid > 0) {
	int status;
	printf("parent - %d\n", pid);
	/* waitpid(-1, &wstatus, 0); */
	if ((pid = wait(&status)) == -1) {
	    perror("wait error");
	    exit(1);
	}
	printf("wait() pid: %d\n", pid);
    } else {
	perror("fork error");
    }

    return 0;
}
