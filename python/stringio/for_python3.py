# python3
#  -- https://docs.python.org/3.5/library/io.html?highlight=stringio

import io


def main():
    output = io.StringIO()
    output.write('first line\n')
    print('Second line.', file=output)
    contents = output.getvalue()
    output.close()
    print(contents)

    b = io.BytesIO(b'abcdef')
    view = b.getbuffer()
    view[2:4] = b'56'
    print(b.getvalue())

if __name__ == '__main__':
    main()
