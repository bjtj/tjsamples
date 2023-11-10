#if defined(_WIN32) || defined(_WIN64) /* windows */

#else

#  include <unistd.h>

#endif

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    printf("Hello\n");
    return 0;
}
