#!/usr/bin/env python
import sys
sys.path = ['./mod'] + sys.path
print('[main] import hello')
import hello
print('[main] import hello')
import hello

def foo():
    print('[main] import hello')
    import hello
    print('[main] import hello')
    import hello


def main():
    print('++ main')
    foo()
    print('-- main')


if __name__ == '__main__':
    main()

# OUT:
# ==================================================
# $ python duplicate.py 
# [main] import hello
# -- hello module imported --        <<<-- import once
# [main] import hello
# ++ main
# [main] import hello
# [main] import hello
# -- main
