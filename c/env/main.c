#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

extern char ** environ;

int main(int argc, char *argv[])
{

    char ** ptr = environ;
    for (;*ptr; ptr++)
    {
	printf("-- %s\n", *ptr);
    }

    printf("%s\n", getenv("USER"));
    
    return 0;
}
