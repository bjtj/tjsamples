from __future__ import print_function
import sys


def main():

    print('x', file=None)
    with open('.out', 'w') as fout:
        print('hello', file=fout)
    print('bye', file=sys.stdout)
    

if __name__ == '__main__':
    main()
