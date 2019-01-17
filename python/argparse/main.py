import os
import sys
import argparse

def nargs():
    
    # https://docs.python.org/3/library/argparse.html#nargs
    parser = argparse.ArgumentParser()
    parser.add_argument('--foo', nargs=2)
    parser.add_argument('bar', nargs=1)
    print(parser.parse_args('c --foo a b'.split())) # Namespace(bar=['c'], foo=['a', 'b'])
    print(parser.parse_args('--foo a b c'.split())) # Namespace(bar=['c'], foo=['a', 'b'])

    assert(parser.parse_args('c --foo a b'.split()) == parser.parse_args('--foo a b c'.split()))

    # ?
    parser = argparse.ArgumentParser()
    parser.add_argument('--foo', nargs='?', const='c', default='d')
    parser.add_argument('bar', nargs='?', default='d')
    print(parser.parse_args(['XX', '--foo', 'YY'])) # Namespace(bar='XX', foo='YY')
    print(parser.parse_args(['XX', '--foo']))       # Namespace(bar='XX', foo='c')
    print(parser.parse_args([]))                    # Namespace(bar='d', foo='d')

    # ? with optional input and output files
    parser = argparse.ArgumentParser()
    parser.add_argument('infile', nargs='?', type=argparse.FileType('r'), default=sys.stdin)
    parser.add_argument('outfile', nargs='?', type=argparse.FileType('w'), default=sys.stdout)
    print(parser.parse_args(['input.txt', 'output.txt']))

    os.remove('output.txt')

    print(parser.parse_args([]))

    # *
    parser = argparse.ArgumentParser()
    parser.add_argument('--foo', nargs='*')
    parser.add_argument('--bar', nargs='*')
    parser.add_argument('baz', nargs='*')
    print(parser.parse_args('a b --foo x y --bar 1 2'.split()))


    # +
    parser = argparse.ArgumentParser(prog='PROG')
    parser.add_argument('foo', nargs='+')
    print(parser.parse_args(['a', 'b']))
    try:
        print(parser.parse_args([]))
    except:
        print('error')

    # argparse.REMAINDER
    parser = argparse.ArgumentParser(prog='PROG')
    parser.add_argument('--foo')
    parser.add_argument('command')
    parser.add_argument('args', nargs=argparse.REMAINDER)
    print(parser.parse_args('--foo B cmd --arg1 XX ZZ'.split())) # Namespace(args=['--arg1', 'XX', 'ZZ'], command='cmd', foo='B')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--name', type=str, default='hello', help='name value')
    parser.add_argument('--count', type=int, default=0, help='count value')
    parser.add_argument('--debug', action='store_true', help='debug mode flag')
    parser.add_argument('--choice', default='c', choices=['a', 'b', 'c'], help='choise one of (a b c)')
    parser.add_argument('--skip-exists')
    parser.add_argument('--skip_exists')
    args = parser.parse_args()
    print(args)
    args, unknown = parser.parse_known_args()
    print('{} {}'.format(args, unknown))


    nargs()

if __name__ == '__main__':
    main()

