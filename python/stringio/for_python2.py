
# python2
#  -- https://docs.python.org/2/library/stringio.html

import StringIO
import cStringIO


def main():
    output = StringIO.StringIO()
    output.write('first line\n')
    print >>output, 'Second line.'
    contents = output.getvalue()
    output.close()
    print(contents)

    output = cStringIO.StringIO()
    output.write('first line\n')
    print >>output, 'Second line'
    contents = output.getvalue()
    output.close()
    print(contents)
    
if __name__ == '__main__':
    main()
