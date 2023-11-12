# libxml2 Reference Manual #

<https://gnome.pages.gitlab.gnome.org/libxml2/devhelp/>

## libxml2 API Modules ##

<https://gnome.pages.gitlab.gnome.org/libxml2/devhelp/general.html>

## tree ##

<https://gnome.pages.gitlab.gnome.org/libxml2/devhelp/libxml2-tree.html>

### Structure xmlAttr ###

<https://gnome.pages.gitlab.gnome.org/libxml2/devhelp/libxml2-tree.html#xmlAttr>

``` c
struct _xmlAttr {
    void *	_private	: application data
    xmlElementType	type	: XML_ATTRIBUTE_NODE, must be second !
    const xmlChar *	name	: the name of the property
    struct _xmlNode *	children	: the value of the property
    struct _xmlNode *	last	: NULL
    struct _xmlNode *	parent	: child->parent link
    struct _xmlAttr *	next	: next sibling link
    struct _xmlAttr *	prev	: previous sibling link
    struct _xmlDoc *	doc	: the containing document
    xmlNs *	ns	: pointer to the associated namespace
    xmlAttributeType	atype	: the attribute type if validating
    void *	psvi	: for type/PSVI information
} xmlAttr;
```
