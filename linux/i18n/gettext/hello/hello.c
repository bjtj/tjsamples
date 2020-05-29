#include <stdio.h>
#include <stdlib.h>

#include <libintl.h>
#include <locale.h>

#define _(STRING) gettext(STRING)

int main()
{

    char * domain;
    
    /* Setting the i18n environment */
    setlocale (LC_ALL, "");
    domain = bindtextdomain ("hello", "./locale");
    printf("bindtextdomain: %s\n", domain);
    domain = textdomain ("hello");
    printf("textdomain: %s\n", domain);

    /* Example of i18n usage */
    printf(_("Hello World\n"));

    return EXIT_SUCCESS;
}
