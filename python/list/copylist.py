#!/usr/bin/env python

import copy

class Item:
    def __init__(self, value):
        self.value = value

    def __repr__(self):
        return f'Item({self.value!r})'


def test1():
    a = [1,2,3]
    b = a
    assert a == b
    a[0] = 7
    assert b[0] == a[0]

    b = a.copy()
    a[0] = 123
    assert b[0] != a[0]


def test2():
    a = [Item(1), Item(2), Item(3)]
    b = a.copy()

    assert a[1].value == 2
    a[1].value = 3
    assert a[1].value == 3
    assert b[1] == a[1]

    c = copy.deepcopy(a)
    assert a[1].value == 3
    a[1].value = 5
    assert a[1].value == 5
    assert c[1] != a[1]


    print(f'a: {a}')
    print(f'b: {b}')
    print(f'c: {c}')


def main():
    test1()
    test2()

if __name__ == '__main__':
    main()
