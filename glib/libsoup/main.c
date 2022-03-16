#include <unistd.h>
#include <glib.h>
#include <libsoup/soup.h>
#include <stdio.h>

/* https://stackoverflow.com/a/57768102/5676460 */
int main(int argc, char *argv[])
{
    const char * url = "http://localhost:8080/stream";

    printf("GLib Version: %d.%d.%d\n",
	   GLIB_MAJOR_VERSION,
	   GLIB_MINOR_VERSION,
	   GLIB_MICRO_VERSION);

    g_autoptr(SoupURI) uri = soup_uri_new (url);

    printf("host: %s\n", soup_uri_get_host(uri));
    printf("port: %d\n", soup_uri_get_port(uri));
    printf("path: %s\n", soup_uri_get_path(uri));

    return 0;
}
