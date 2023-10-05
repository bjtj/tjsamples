import uuid

class A:
    def __init__(self):
        self._id = str(uuid.uuid4())[:8]

    def __eq__(self, other):
        return self._id == other._id

    def __str__(self):
        return '(ID: {})'.format(self._id)

    def __repr__(self):
        return self.__str__()

class X(A):
    pass

class Y(A):
    def __init__(self):
        pass

def main():
    a = A()
    b = A()

    print(a == b)               # False
    print(a == a)               # True

    lst = []

    try:
        print(lst.index(a))
    except ValueError:
        print('Value Error')    # <--
    

    lst.append(a)
    lst.append(b)
    lst.append(a)

    print(lst)                  # OUTPUT> [(ID: 27c7a203), (ID: 8e1b1fb5), (ID: 27c7a203)]

    print(lst.index(a))         # OUTPUT> 0

    lst.remove(a)

    print(lst)                  # OUTPUT> [(ID: 8e1b1fb5), (ID: 27c7a203)]

    lst.remove(a)

    try:
        lst.remove(a)
    except ValueError:
        print('Value Error')    # <--


    print(X())                  # OUTPUT> (ID: 6dd79b8f)
    # print(Y())                <--- AttributeError: 'Y' object has no attribute '_id'

if __name__ == '__main__':
    main()
