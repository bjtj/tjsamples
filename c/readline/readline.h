#ifndef __READLINE_H__
#define __READLINE_H__

#include <stdio.h>
#include <stdlib.h>

typedef void (*read_line_handler_cb)(char*, void*);

extern void readlines(FILE * fp, read_line_handler_cb cb, void * user);
extern char * readline(FILE * fp);

#endif
