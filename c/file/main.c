#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

static void _write(void)
{
    FILE * fp = fopen("out.txt", "w");
    if (!fp) {
	perror("fopen() failed");
	exit(1);
    }

    fputs("hello\n", fp);
    fputs("hi\n", fp);
    fputs("bye\n", fp);

    fclose(fp);
}

static void _read(void)
{
    FILE * fp = fopen("out.txt", "r");
    if (!fp)
    {
	perror("fopen() failed");
	exit(1);
    }

    while (1)
    {
	char buffer[1024] = {0,};
	if (fgets(buffer, sizeof(buffer), fp) == NULL)
	{
	    break;
	}
	printf("RECV> %s", buffer);
    }

    fclose(fp);
}

int main(int argc, char *argv[])
{
    _write();
    _read();
    
    return 0;
}
