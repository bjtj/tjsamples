#!/usr/bin/env python

class Listy:
    def __init__(self):
        self._lst = []

    def __iter__(self):
        return iter(self._lst)

    def add(self, item):
        self._lst.append(item)


class Listy2:
    def __init__(self):
        self._lst = []

    def __getitem__(self, key):
        return self._lst[key]

    def __len__(self):
        return len(self._lst)

    def add(self, item):
        self._lst.append(item)


def test1():
    lst = Listy()
    lst.add('1')
    lst.add('2')
    lst = [x for x in lst]


def test2():
    lst = Listy2()
    lst.add('1')
    lst.add('2')
    lst = [x for x in lst]


def main():
    test1()
    test2()


if __name__ == '__main__':
    main()
