#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <libxml/parser.h>

static void s_print_xmlnode(xmlNode *, int);

int main(int argc, char *argv[])
{
  LIBXML_TEST_VERSION;
  xmlDoc * doc;
  xmlNode * root;

  if (argc < 2) {
    fprintf(stderr, "USAGE: %s <xml-path>\n", argv[0]);
    exit(1);
  }

  doc = xmlReadFile(argv[1], NULL, 0);
  if (doc == NULL) {
    fprintf(stderr, "xmlReadFile() failed\n");
    exit(1);
  }

  root = xmlDocGetRootElement(doc);
  s_print_xmlnode(root, 0);

  printf("DONE\n");

  xmlFreeDoc(doc);
  xmlCleanupParser();
  xmlMemoryDump();
    
  return 0;
}


void s_print_xmlnode(xmlNode * node, int depth)
{
  switch (node->type) {
  case XML_ELEMENT_NODE:
  {
    xmlNode * child;
    xmlAttr * attr;
    xmlNs * ns;
    int i;
    for (i = 0; i < depth; ++i) {
      putchar(' ');
      putchar(' ');
    }
    printf("%s", node->name);
    ns = node->nsDef;
    if (ns) {
      putchar('[');
    }
    for (; ns; ns = ns->next) {
      printf("%s . %s", ns->prefix, ns->href);
      if (ns->next == NULL) {
        putchar(']');
      } else {
        putchar(',');
      }
    }
    
    for (attr = node->properties; attr; attr = attr->next) {
      if (attr->prev == NULL) {
        putchar('(');
      }
      if (attr->prev) {
        putchar(',');
      }
      printf("%s . %s", attr->name, attr->children->content);
      if (attr->next == NULL) {
        putchar(')');
      }
    }
    putchar('\n');
    for (child = node->xmlChildrenNode; child; child = child->next) {
      s_print_xmlnode(child, depth + 1);
    }
    break;
  }
  case XML_TEXT_NODE:
  {
    int empty = 1;
    xmlChar * ch = node->content;
    for (; *ch; ch++) {
      if (!isspace(*ch)) {
        empty = 0;
        break;
      }
    }
    if (!empty) {
      printf("```\n");
      printf("%s\n", node->content);
      printf("```\n");
    }
    break;
  }
  default:
    break;
  }
}
