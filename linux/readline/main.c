#include <unistd.h>
#include <readline/readline.h>
#include <readline/history.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{

    char * input, shell_prompt[100];
    char * ptr = NULL;
    const char * cmd_prefix = "bash -c ";
    size_t size;

    rl_bind_key('\t', rl_complete);

    for (; ; )
    {
	snprintf(shell_prompt, sizeof(shell_prompt), "%s:%s $ ", getenv("USER"), getcwd(NULL, 1024));
	input = readline(shell_prompt);

	if (!input)
	{
	    break;
	}

	if (strlen(input) > 0) {
	    add_history(input);
	}

	size = strlen(input) + strlen(cmd_prefix) + 1;
	ptr = (char*)malloc(size);
	memset(ptr, 0, size);
	snprintf(ptr, size, "%s%s", cmd_prefix, ptr);
	system(ptr);
	free(ptr);

	free(input);
    }
    
    return 0;
}
