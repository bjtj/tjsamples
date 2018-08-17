#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    while (1) {
	char ch = getchar();
	if (ch == 0x0a) {
	    continue;
	}
	printf("'%c' (0x%02x)\n", ch, ch);
    }
    return 0;
}
