

def test1():
    lst = [1,2,3]

    lst.append(4)
    print(lst)                  # [1, 2, 3, 4]
    lst.remove(2)
    print(lst)                  # [1, 3, 4]

    lst = [1,2,3,2,5,6]
    lst.remove(2)
    print(lst)                  # [1, 3, 2, 5, 6]

    try:
        lst.remove(99)
    except Exception as err:
        print(err)              # list.remove(x): x not in list
        

class Obj:
    def __init__(self, value):
        self._value = value

    @property
    def value(self):
        return self._value

    def __str__(self):
        return 'value: {}'.format(self._value)

    def __repr__(self):
        return self.__str__()

def test2():
    o1 = Obj(1)
    o2 = Obj(2)
    o3 = Obj(3)
    o4 = Obj(4)

    lst = [o1, o2, o3, o4]
    print(lst)                  # [value: 1, value: 2, value: 3, value: 4]

    lst.append(Obj(5))
    print(lst)                  # [value: 1, value: 2, value: 3, value: 4, value: 5]

    lst.remove(o2)
    print(lst)                  # [value: 1, value: 3, value: 4, value: 5]

    try:
        lst.remove(Obj(5))
    except Exception as err:
        print(err)              # list.remove(x): x not in list


class LiteralObj:
    def __init__(self, value):
        self._value = value

    @property
    def value(self):
        return self._value

    def __str__(self):
        return 'value: {}'.format(self._value)

    def __repr__(self):
        return self.__str__()

    def __eq__(self, other):
        return self._value == other._value

def test3():
    o1 = LiteralObj(1)
    o2 = LiteralObj(2)
    o3 = LiteralObj(3)
    o4 = LiteralObj(4)

    lst = [o1, o2, o3, o4]
    print(lst)                  # [value: 1, value: 2, value: 3, value: 4]

    lst.append(LiteralObj(5))
    print(lst)                  # [value: 1, value: 2, value: 3, value: 4, value: 5]

    lst.remove(o2)
    print(lst)                  # [value: 1, value: 3, value: 4, value: 5]

    lst.remove(LiteralObj(5))
    print(lst)                  # [value: 1, value: 3, value: 4]

def test4():
    lst1 = [1,2,3]
    lst2 = [4,5,6]
    print(lst1 + lst2)
    print(lst1 + [9])

    print(len([]) == 0)

def main():
    print('==== TEST1 ====')
    test1()
    print('==== TEST2 ====')
    test2()
    print('==== TEST3 ====')
    test3()
    print('==== TEST4 ====')
    test4()


if __name__ == '__main__':
    main()
