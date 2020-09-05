#!/usr/bin/env python

# https://stackoverflow.com/a/9079062
import sys


def main():
    """main
    """
    print(sys.version_info[0])
    print('major:', sys.version_info.major)
    print('minor:', sys.version_info.minor)
    print(sys.version_info)


if __name__ == '__main__':
    main()
