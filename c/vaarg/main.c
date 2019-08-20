#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdarg.h>

int sum(int count, ...)
{
    int i = 0;
    int total = 0;
    va_list arg_ptr;
    va_start(arg_ptr, count);
    for (i = 0; i < count; ++i) {
	int n = va_arg(arg_ptr, int);
	total += n;
    }
    va_end(arg_ptr);
    return total;
}

void print(const char * fmt, ...)
{
    va_list arg_ptr;
    va_start(arg_ptr, fmt);
    vprintf(fmt, arg_ptr);
    va_end(arg_ptr);
}

int main(int argc, char *argv[])
{

    printf("sum: %d\n", sum(3, 1,2,3));
    printf("sum: %d\n", sum(4, 1,2,3,4));
    printf("sum: %d\n", sum(5, 1,2,3,4,5));
    printf("sum: %d\n", sum(6, 1,2,3,4,5,6));

    print("sum(vprintf): %d\n", sum(7, 1,2,3,4,5,6,7));
    
    return 0;
}
