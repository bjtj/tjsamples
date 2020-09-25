#!/usr/bin/env python

from hello import *


def main():
    hello()
    try:
        world()
    except Exception as e:
        print(e)
    


if __name__ == '__main__':
    main()
