#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "map.h"


void test_simple(void)
{
    struct map_t * map = map_new(NULL, NULL, NULL);
    char str_key[10] = {0,};

    snprintf(str_key, sizeof(str_key), "k");

    map_set_value(map, "a", "A");
    map_set_value(map, "b", "B");
    map_set_value(map, str_key, "str-value");

    printf("a is? %s\n", (char*)map_get_value(map, "a"));
    printf("b is? %s\n", (char*)map_get_value(map, "b"));

    printf("k(const char*) is? %s\n", (char*)map_get_value(map, "k"));
    printf("k(char buffer[]) is? %s\n", (char*)map_get_value(map, str_key));

    {
		int key = 1;
		int value = 10;
		map_set_value(map, &key, &value);
		printf("%d\n", *(int*)map_get_value(map, &key));
    }

    map_free(map);
}

static int s_str_equals(void * a, void * b)
{
    return strcmp((char*)a, (char*)b) == 0;
}

void test_alloc(void)
{
    struct map_t * map = map_new(s_str_equals, free, free);
    map_set_value(map, strdup("a"), strdup("A"));
    printf("a(const char*) is? %s\n", (char*)map_get_value(map, "a"));
    map_free(map);
}

int main(int argc, char *argv[])
{
    test_simple();
    test_alloc();
    
    return 0;
}
