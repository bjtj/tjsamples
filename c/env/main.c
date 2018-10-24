#ifdef _WIN32

#include <Windows.h>
#include <stdio.h>

int main(int argc, char *argv[])
{
    LPTSTR lpszVariable;
    LPTCH lpvEnv;
    lpvEnv = GetEnvironmentStrings();
    if (lpvEnv == NULL)
    {
	fprintf(stderr, "GetEnvironmentStrings() failed\n");
	exit(1);
    }
    for (lpszVariable = (LPTSTR)lpvEnv; *lpszVariable; lpszVariable++)
    {
	while (*lpszVariable)
	    putchar(*lpszVariable++);
	putchar('\n');
    }

    if(FreeEnvironmentStrings(lpvEnv) == 0)
	printf("GetEnvironmentStrings() failed.\n");
    else
	printf("\nGetEnvironmentStrings() is OK.\n");
    
    return 0;
}


#else

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

#endif
