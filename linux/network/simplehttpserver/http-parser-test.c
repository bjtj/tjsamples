#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "http-parser.h"

int main(int argc, char *args[]) {

	http_header_fields_t fields = {0,};
	http_request_line_t line = {0,};
	char header[1024] = {0,};
	const char * hp = header;
	snprintf(header, sizeof(header), "GET / HTTP/1.1\r\n"
			 "User-Agent: curl/7.35.0\r\n"
			 "Host: example.com\r\n"
			 "Accept: */*\r\n"
			 "\r\n");

	hp = parseHttpRequestLine(header, &line);
	printf("Method: \"%s\"\n", line.method);
	printf("Path: \"%s\"\n", line.uri);
	printf("Protocol: \"%s\"\n", line.protocol);
	printf("\n");

	parseHttpHeader(hp, (void*)&fields);
	printf("Host: %s\n", getHeaderField(&fields, "Host"));
	printf("host: %s\n", getHeaderField(&fields, "host"));
	printf("accept: %s\n", getHeaderField(&fields, "accept"));
	printf("user-agent: %s\n", getHeaderField(&fields, "user-agent"));

	releaseHeaderFields(&fields);

    return 0;
}
