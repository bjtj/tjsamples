#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char *argv[])
{
	int i, n = 10;
	time_t t;
	srand((unsigned) time(&t));

	for (i = 0; i < n; ++i) {
    printf("%d\n", rand() % 50);
	}
	return 0;
}
