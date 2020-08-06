#!/usr/bin/env python

def main():
    # contains
    print('llo' in 'hello')
    # upper
    print('heLlo'.upper())
    # lower
    print('hEllo'.lower())
    # capital
    print('hEllo World'.title())
    # trim
    print('   ab c  '.strip())
    # split
    print('a,b,c'.split(','))
    # splitlines
    print('line1\nline2\nline3\n'.splitlines())
    # empty
    if not '':
        print('(empty)')
    # substring
    print('hello world'[3:7])
    # reverse
    print('hello world'[::-1])
    # length
    print(len('hello world'))
    # unicode
    print(u'X')


    assert('' is not 'hello')
    assert('hello' is not '')
    assert('' is '')


    print('hello'
          ' world')

    print(f'1 + 1 = {1 + 1}, '
          f'2 + 2 = {2 + 2}')

if __name__ == '__main__':
    main()
