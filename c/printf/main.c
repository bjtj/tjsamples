#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(int argc, char *argv[])
{
    long x = 10;
    printf("%010ld\n", x);
    return 0;
}
