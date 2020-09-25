#!/usr/bin/env python

def test1(func):
    print('----------------------')
    try:
        print('FUNC::begin')
        func()
        print('FUNC::end')
    except Exception as e:
        print('EXCEPT:', e)
    finally:
        print('FINALLY')


def main():
    test1(lambda: print('wow'))
    test1(lambda: 0 / 0)


if __name__ == '__main__':
    main()
