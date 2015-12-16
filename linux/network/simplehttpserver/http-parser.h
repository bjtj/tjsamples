#ifndef __HTTP_PARSER_H__
#define __HTTP_PARSER_H__

typedef struct _http_request_line_t {
	char method[100];
	char uri[4096];
	char protocol[512];
} http_request_line_t;

typedef struct _http_header_field_t {
	char name[100];
	char value[512];
	struct _http_header_field_t * next;
} http_header_field_t;

typedef struct _http_header_fields_t {
	http_header_field_t * first;
} http_header_fields_t;

extern const char * parseHttpRequestLine(const char * header, http_request_line_t * line);
extern void parseHttpHeader(const char * header, http_header_fields_t * fields);
extern char * getHeaderField(http_header_fields_t * fields, const char * name);
extern void releaseHeaderFields(http_header_fields_t * fields);

#endif
