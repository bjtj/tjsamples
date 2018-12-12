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

static void _filesize(const char * path)
{
    int size;
    FILE * fp = fopen(path, "rb");
    fseek(fp, 0, SEEK_END);
    size = ftell(fp);
    /* fseek(fp, 0, SEEK_SET); -- set file pointer to start */
    fclose(fp);

    printf("file size of '%s' is %d\n", path, size);
}

int main(int argc, char *argv[])
{
    _write();
    _read();
    _filesize("out.txt");

    remove("out.txt");
    
    return 0;
}
