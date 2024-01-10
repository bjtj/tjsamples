#!/usr/bin/env python

# e.g. `$ mypy ./main.py`

from typing import List, Dict


class A:
    def __init__(self, val: int):
        self._val = val

    def __repr__(self):
        return f'A({self._val!r})'


Vector = List[A]

def test1(v: int) -> Vector:
    lst = []
    lst.append(A(v + 1))
    lst.append(A(v + 2))
    return lst


def test2(v: int) -> Vector:
    lst = []
    lst.append(v + 1)
    lst.append(v + 2)
    return lst


def test3(val) -> str:
    return val


def test4(val: List[List[A]]) -> List[List[A]]:
    return val


def test5(val: int) -> List[List[A]]:
    return [[val]]


def test6(val: int) -> List[List[A]]:
    return [[A(val)]]


def test7(val: A) -> A:
    return val


def test8(param: Dict[int, str]) -> None:
    print(param)


def main():
    print(test1(1))                     # [A(2), A(3)]
    try:
        print(test1('1'))
    except Exception as e:
        print(e)                        # can only concatenate str (not "int") to str
    try:
        print(test1(None))
    except Exception as e:
        print(e)                        # unsupported operand type(s) for +: 'NoneType' and 'int'
    print(test2(2))                     # [3, 4]
    print(type(test3(1)))               # <class 'int'>
    print(type(test3('1')))             # <class 'str'>
    print(type(test4([[1]])))           # <class 'list'>
    print(type(test4([[A(1)]])))        # <class 'list'>
    print(type(test5(1)))               # <class 'list'>
    print(type(test6(1)))               # <class 'list'>
    print(test7(A(1)))                  # A(1)
    print(test7(None))                  # None
    test8({1: 'hello'})                 # {1: 'hello'}
    test8({'1': 'hello'})               # {'1': 'hello'}

    d = {'a': 1, 'b': 2}
    print(type(d))                      # <class 'dict'>
    print(type(d) == dict)              # True


if __name__ == '__main__':
    main()
