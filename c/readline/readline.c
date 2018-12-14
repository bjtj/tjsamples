#include "readline.h"
#include <stdlib.h>
#include <string.h>

void readlines(FILE * fp, read_line_handler_cb cb, void * user)
{
    char * line;
    while ((line = readline(fp)) != NULL)
    {
	cb(line, user);
	free(line);
    }
}

char * readline(FILE * fp)
{
    char * ret = NULL;
    char buffer[1024] = {0,};
    int idx = 0;
    int size = 0;
    int ch;
    while ((ch = fgetc(fp)) != EOF)
    {
	if (idx >= sizeof(buffer)) {
	    char * temp = (char*)malloc(size + sizeof(buffer));
	    memset(temp, 0, size + sizeof(buffer));
	    if (ret)
	    {
		memcpy(temp, ret, size);
		free(ret);
	    }

	    memcpy(temp + size, buffer, sizeof(buffer));
	    size += sizeof(buffer);

	    ret = temp;

	    idx = 0;
	}

	buffer[idx++] = (char)ch;
	
	if (ch == '\n')
	{
	    break;
	}
    }

    if (idx > 0) {
	char * temp = (char*)malloc(size + idx + 1);
	memset(temp, 0, size + idx + 1);
	if (ret)
	{
	    memcpy(temp, ret, size);
	    free(ret);
	}
	memcpy(temp + size, buffer, idx);
	ret = temp;
    }

    return ret;
}
