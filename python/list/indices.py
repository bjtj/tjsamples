class Obj:
    def __getitem__(self, i):
        print(i, '=>', i.indices(10))


def main():
    lst = []
    print(lst)

    lst = [None] * 10
    print(lst)

    print(len(lst))

    lst = [i for i in range(0, 10, 1)]
    print(lst)

    print(lst[:5])
    print(lst[5:])
    print(lst[:5:2])
    print(lst[5::2])

    print(lst[-5:-1])
    print(lst[-10:-1])

    print(lst[4:0:-1])
    print(lst[5:2:-1])
    

    obj = Obj()
    obj[:5]
    obj[5:]
    obj[::]
    obj[::2]
    obj[-4:]
    obj[-10:]


if __name__ == '__main__':
    main()
