#!/usr/bin/env python

"""simple example
"""

import argparse


def main():
    """main
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('-a')
    args = parser.parse_args()
    print(args)
    # ./simple.py -a 1 -a 2
    # Namespace(a='2')
    args = parser.parse_args()
    print(args)


if __name__ == '__main__':
    main()
