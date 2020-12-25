#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <libxml/parser.h>

int main(int argc, char *argv[])
{
    xmlNode * root;
    const char * text = "<?xml version=\"1.0\"?>\r\n<root></root>";
    xmlDoc * doc = xmlReadMemory(text, strlen(text), NULL, NULL, 0);
    root = xmlDocGetRootElement(doc);
    printf("Root Element Name: %s\n", root->name);
    xmlFreeDoc(doc);
    xmlCleanupParser();
    xmlMemoryDump();
    return 0;
}
