import os
from io import BytesIO
import xml.etree.ElementTree as ET

def print_tree(elem, space=''):
    print('{}{} "{}"'.format(space, elem.tag, '' if not elem.text else elem.text.strip()))
    for child in elem:
        print_tree(child, space + ' ')

    

def main():
    # https://docs.python.org/2/library/xml.etree.elementtree.html
    tree = ET.parse('sample.xml')
    root = tree.getroot()
    print_tree(root)

    with open('sample.xml', 'r') as f:
        root = ET.fromstring(f.read())
        print_tree(root)

    ET.dump(root)

    print(ET.tostring(root))


    # https://stackoverflow.com/a/3605831
    root = ET.Element("root")
    doc = ET.SubElement(root, "doc")

    ET.SubElement(doc, "field1", name="blah").text = "some value1"
    ET.SubElement(doc, "field2", name="asdfasd").text = "some vlaue2"

    tree = ET.ElementTree(root)
    tree.write("out.xml")


    # https://stackoverflow.com/a/15357667
    document = ET.Element('outer')
    node = ET.SubElement(document, 'inner')   
    et = ET.ElementTree(document)

    f = BytesIO()
    et.write(f, encoding='utf-8', xml_declaration=True) 
    print(f.getvalue())


    #
    outer = ET.Element('outer')
    inner = ET.SubElement(outer, 'inner')
    x = ET.fromstring('<extern>hi!</extern>')
    inner.append(x)
    # ET.SubElement(inner, x)
    # ET.SubElement(inner, '<extern>hi!</extern>')
    et = ET.ElementTree(outer)

    f = BytesIO()
    et.write(f, encoding='utf-8', xml_declaration=True) 
    print(f.getvalue())


if __name__ == '__main__':
    main()
