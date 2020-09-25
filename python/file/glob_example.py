#!/usr/bin/env python

import glob


def main():
    print(glob.glob('/dev/video*'))
    p = len('/dev/video')
    print([x[p:] for x in glob.glob('/dev/video*')])


if __name__ == '__main__':
    main()
