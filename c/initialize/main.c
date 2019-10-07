#include <unistd.h>
#include <string.h>
#include <stdio.h>


typedef struct _type_t {
    int a;
    int b;
    int c;
} type_t;


static void print_type(type_t * type)
{
    printf("a: %d\n", type->a);
    printf("b: %d\n", type->b);
    printf("c: %d\n", type->c);
}


int main(int argc, char *argv[])
{
    printf("============\n");
    
    {
	type_t type;
	print_type(&type);
    }

    printf("============\n");

    {
	type_t type = {
	    .a = 10,
	    .b = 2,
	    .c = 7
	};
	print_type(&type);
    }

    printf("============\n");

    {
	type_t type = {
	    .b = 20
	};
	print_type(&type);
    }
    
    return 0;
}

