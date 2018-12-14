#include "readline.h"
#include <string.h>

int min(int a, int b)
{
    return a < b ? a : b;
}

void handle_line(char * line, void * user)
{
    int count = min(strlen(line), 50);
    printf("[LINE] '%.*s'\n", count, line);
}

int main(int argc, char *argv[])
{

    if (argc < 2)
    {
	fprintf(stderr, "usage: %s <filepath>\n", argv[0]);
	return 1;
    }

    if (0) {
	char * line = NULL;
	FILE * fp = fopen(argv[1], "r");
	if (fp == NULL) {
	    return 1;
	}
	while ((line = readline(fp)) != NULL)
	{
	    int count = min(strlen(line), 50);
	    printf("LINE: '%.*s'\n", count, line);
	    free(line);
	}
	fclose(fp);
    }

    {
	FILE * fp = fopen(argv[1], "r");
	if (fp == NULL) {
	    return 1;
	}
	readlines(fp, handle_line, NULL);
	fclose(fp);
    }
    
    return 0;
}
