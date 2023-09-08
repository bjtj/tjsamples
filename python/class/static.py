

class Obj:
    __lst = list()

    def __init__(self):
        self.__lst.append(1)

    def __str__(self):
        return 'obj list: {}'.format(self.__lst)
    


def main():
    obj = Obj()
    print(obj)

    obj2 = Obj()
    print(obj2)

if __name__ == '__main__':
    main()
