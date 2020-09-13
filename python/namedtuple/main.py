#!/usr/bin/env python

import sys
from collections import namedtuple


def test1():
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

def test2():
    Point = namedtuple('Point', ['x', 'y', 'z'])
    Point.__new__.__defaults__ = (None,)
    # print(Point(1))             # error
    print(Point(1,2))
    print(Point(1,2,3))
    point = Point(1,2)
    print(point)
    # point.z = 10
    point = point._replace(z=10)
    print(point)

def main():
    """main
    """
    test1()
    test2()


if __name__ == '__main__':
    main()
