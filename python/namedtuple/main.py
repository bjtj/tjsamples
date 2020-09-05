#!/usr/bin/env python

import sys
from collections import namedtuple

def main():
    """main
    """
    Point = namedtuple('Point', ['x', 'y'])
    p = Point(11, y=22)
    print(p[0] + p[1])
    x, y = p
    print(x, y)
    print(p.x + p.y)
    print(p)
    print(p == Point(11, y=22))

    # python 3.7
    if sys.version_info.major == 3 and sys.version_info.minor >= 7:
        Account = namedtuple('Account', ['type', 'balance'], defaults=[0])
        print(Account._field_defaults)
        Account = namedtuple('Account', ['type', 'balance', 'etc'], defaults=[0, None])
        print(Account._field_defaults)


if __name__ == '__main__':
    main()
