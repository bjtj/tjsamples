#!/usr/bin/env python

import re


def main():
    print('a b c'.replace(' ', ' x', 1))
    print('a b c'.replace(' ', '_'))
    print('========================')
    pattern = re.compile(re.escape('xyz'), re.IGNORECASE)
    print(pattern.sub('123', 'xyz---xyz'))
    print(pattern.sub('123', 'xyz---XYZ'))
    print(pattern.sub('123', 'xyz---xyz', 1))
    print('========================')
    pattern = re.compile('xyz ?')
    print(pattern.sub('123', 'xyz---xyz'))
    print(pattern.sub('123', 'xyz---abc---xyz'))
    print('========================')
    pattern = re.compile('a ?')
    print(pattern.sub('A ', 'abc'))
    print(pattern.sub('A ', 'a bc'))
    print(pattern.sub('A ', 'ABC'))
    print(pattern.sub('A ', 'A bc'))
    print('========================')
    pattern = re.compile('[aA] ?')
    print(pattern.sub('A ', 'abc'))
    print(pattern.sub('A ', 'a bc'))
    print(pattern.sub('A ', 'ABC'))
    print(pattern.sub('A ', 'A bc'))
    print('========================')
    pattern = re.compile('(abc|ABC)')
    print(pattern.sub('123', 'abc'))
    print(pattern.sub('123', 'ABC'))
    print(pattern.sub('123', 'Abc'))
    print('========================')
    pattern = re.compile('abc', re.IGNORECASE)
    print(pattern.sub('123', 'abc ABC Abc', 1))
    print(pattern.sub('123', 'ABC'))
    print(pattern.sub('123', 'Abc'))
    print('========================')
    pattern = re.compile('([a-z])([A-Z])')
    print(pattern.sub('\\1 \\2', 'AbcDefGhi'))


if __name__ == '__main__':
    main()
