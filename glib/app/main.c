#include <unistd.h>
#include <glib.h>
#include <stdio.h>

int main(int argc, char *argv[])
{
    /* https://docs.gtk.org/glib/func.build_filename.html */
    gchar * fn = g_build_filename("abc", "def", NULL);
    printf("%s\n", fn);		/* abc/def */
    g_free(fn);

    fn = g_build_filename("abc/", "def", NULL);
    printf("%s\n", fn);		/* abc/def */
    g_free(fn);
    return 0;
}
