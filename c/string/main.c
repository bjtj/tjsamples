#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main(int argc, char *argv[])
{
    /* contains */
    {
	const char * x = strstr("hello world", "o w");
	printf("%p\n", x);
	if (x) {
	    printf("%s\n", x);
	}
	x = strstr("hello world", "x");
	printf("%p\n", x);
	if (x) {
	    printf("%s\n", x);
	}
    }

    /* upper */
    {
	const char * str = "hEllo woRld";
	do  {
	    putc(toupper(*str), stdout);
	} while(*++str);
	putchar('\n');
    }
    
    /* lower */
    {
	const char * str = "hEllo woRld";
	do  {
	    putc(tolower(*str), stdout);
	} while(*++str);
	putchar('\n');
    }

    /* captical */
    {
	const char * str = "hEllo woRld";
	const char * ptr = str;
	for (; *ptr; ptr++) {
	    if (isalpha(*ptr) && (ptr == str || isspace(*(ptr-1)))) {
		putchar(toupper(*ptr));
	    } else {
		putchar(tolower(*ptr));
	    }
	}
	putchar('\n');
    }

    /* trim */
    {
	const char * str = "  a b\tc d \t   ";
	const char * ptr = str;
	int started = 0;
	const char * end = str + strlen(str);
	for (; isspace(*(end-1)) && end != str; end--) {}
	putchar('"');
	for (; ptr != end; ptr++) {
	    if (isalpha(*ptr) && !started) {
		started = 1;
	    }
	    if (started) {
		putchar(*ptr);
	    }
	}
	putchar('"');
	putchar('\n');
    }

    /* split */
    {
	/* http://www.manpagez.com/man/3/strsep/ */
	const char * str = "Location: http://example.com";
	char * copy = strdup(str);
	char * beg = copy;
	char * tok;
	int i;
	for (i = 0; (tok = strsep(&copy, ":")) != NULL; i++) {
	    if (i == 0) {
		printf("%s\n", tok);
	    }
	    if (i == 1) {
		if (copy != NULL) {
		    printf("%s\n", str + (tok - beg));
		} else {
		    printf("%s\n", tok);
		}
	    }
	}
	free(copy);
    }

    /* split lines */
    const char * str = "hello\nworld\nbye\n";
    const char * line_beg = str;
    const char * line_end = strstr(line_beg, "\n");
    do {
	printf("line: '%.*s'\n", (int)(line_end - line_beg), line_beg);
	line_beg = line_end + 1;
    } while ((line_end = strstr(line_beg, "\n")));

    if (*line_beg) {
	printf("line: '%s'\n", line_beg);
    }

    /* empty */
    if (!strlen("")) {
	printf("(empty)\n");
    }

    /* substring */
    {
	char out[10] = {0,};
	int beg = 3;
	int end = 7;
	memcpy(out, "hello world" + beg, end - beg);
	printf("%s\n", out);
    }

    /* reverse */
    {
	const char * str = "hello world";
	const char * ptr = str + strlen(str);
	while (str != ptr--) {
	    putchar(*ptr);
	}
	putchar('\n');
    }

    /* length */
    printf("%d\n", (int)strlen("hello world"));
    
    return 0;
}
