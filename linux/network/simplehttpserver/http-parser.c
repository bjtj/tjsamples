#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "http-parser.h"

typedef void (*name_value_handler)(const char * name, const char * value, void * userData);
static const char * s_parse_http_request_line(const char * header, http_request_line_t * line);
static int s_parse_header_fields(const char * str, name_value_handler handler, void * userData);
static void s_make_name_value_list(const char * name, const char * value, void * userData);
static char * s_get_header_field(http_header_fields_t * fields, const char * name);
static void s_remove_header_fields(http_header_fields_t * fields);

const char * parseHttpRequestLine(const char * header, http_request_line_t * line) {
	return s_parse_http_request_line(header, line);
}
void parseHttpHeader(const char * header, http_header_fields_t * fields) {
	s_parse_header_fields(header, s_make_name_value_list, fields);
}
char * getHeaderField(http_header_fields_t * fields, const char * name) {
	return s_get_header_field(fields, name);
}
void releaseHeaderFields(http_header_fields_t * fields) {
	s_remove_header_fields(fields);
}

static void s_append_header_field(http_header_fields_t * fields, const char * name, const char * value) {
	http_header_field_t * new_node = NULL;
	http_header_field_t * last = fields->first;
	while (last && last->next) {
		last = last->next;
	}

	new_node = calloc(sizeof(http_header_field_t), 1);
	snprintf(new_node->name, sizeof(new_node->name), "%s", name);
	snprintf(new_node->value, sizeof(new_node->value), "%s", value);
	
	if (last == NULL) {
		fields->first = new_node;
	} else {
		last->next = new_node;
	}
}

static char * s_get_header_field(http_header_fields_t * fields, const char * name) {
	http_header_field_t * header = fields->first;
	while (header) {
		if (!strcasecmp(header->name, name)) {
			return header->value;
		}
		header = header->next;
	}
	return NULL;
}

static void s_remove_header_fields(http_header_fields_t * fields) {
	http_header_field_t * header = fields->first;
	while (header) {
		http_header_field_t * node = header;
		header = header->next;
		free(node);
	}
}

static char * s_first_not_space(char * str) {
	while (*str) {
		if (!isspace(*str)) {
			return str;
		}
		str++;
	}
	return NULL;
}

static char * s_find(char * str, char m) {
	while (*str) {
		if (*str == m) {
			return str;
		}
		str++;
	}
	return NULL;
}

static char * s_rtrim(char * str, size_t size) {
	size_t i = size - 1;
	for (; i >= 0; i--) {
		if (!isspace(str[i])) {
			break;
		}
		str[i] = '\0';
	}
	return str;
}

static const char * s_parse_http_request_line(const char * header, http_request_line_t * line) {
	char line_buffer[sizeof(http_request_line_t)] = {0,};
	char * lp = line_buffer;
	char * ps = NULL;
	char * pe = NULL;
	while (*header && lp < line_buffer + sizeof(line_buffer) - 1) {
		if (*header == '\r') {
			break;
		}
		*lp++ = *header++;
	}

	ps = line_buffer;
	pe = s_find(line_buffer, ' ');
	if (!pe) {
		return;
	}
	memcpy(line->method, ps, pe - ps);
	ps = s_first_not_space(pe);
	if (!ps) {
		return NULL;
	}
	pe = s_find(ps, ' ');
	if (!pe) {
		return NULL;
	}
	memcpy(line->uri, ps, pe - ps);
	ps = s_first_not_space(pe);
	if (ps) {
		snprintf(line->protocol, sizeof(line->protocol), "%s", ps);
	}
	return (header + 2);
}

static int s_parse_header_field(char * line, char * nameBuf, size_t nameLen, char * valueBuf, size_t valueLen) {
	char * ns = NULL;
	char * ne = NULL;

	ns = s_first_not_space(line);
	if (!ns) {
		return -1;
	}
	ne = s_find(ns, ':');
	if (!ne) {
		return -1;
	}
	*ne = '\0';
	
	snprintf(nameBuf, nameLen, "%s", s_rtrim(ns, ne - ns));
	snprintf(valueBuf, valueLen, "%s", s_first_not_space(ne + 1));

	return 0;
}

static const char *  s_read_header_line(const char * str, char * buf, size_t size) {
	const char * e = s_find((char*)str, '\r');
	if (!e) {
		snprintf(buf, size, "%s", str);
		return NULL;
	} else {
		size_t len = e - str;
		snprintf(buf, (len + 1 > size ? size : len + 1), "%s", str);
		return e + 2;
	}
}

static int s_parse_header_fields(const char * str, name_value_handler handler, void * userData) {
	char line[1024] = {0,};
	const char * lp = str;
	while ((lp = s_read_header_line(lp, line, sizeof(line)))) {
		char name[100] = {0,};
		char value[128] = {0,};
		s_parse_header_field(line, name, sizeof(name), value, sizeof(value));
		if (handler) {
			handler(name, value, userData);
		}
	}
	return 0;
}

static void s_print_name_value(const char * name, const char * value, void * userData) {
	printf("NAME: \"%s\" / VALUE: \"%s\"\n", name, value);
}

static void s_make_name_value_list(const char * name, const char * value, void * userData) {
	http_header_fields_t * fields = (http_header_fields_t*)userData;
	s_append_header_field(fields, name, value);
}
