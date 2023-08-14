

def test1():
    class MyObj(object):
        def __init__(self):
            pass

        def __getattr__(self, item):
            self.__dict__[item] = None
            return None

        def __getattribute__(self, item):
            return object.__getattribute__(self, item)

        def __setattr__(self, item, val):
            self.__dict__[item] = val

        def __str__(self):
            return '{}'.format(self.__dict__)

    obj = MyObj()
    obj.hello = "hello"
    print('obj:', obj)          # obj: {'hello': 'hello'}
    print('hello:', obj.hello)  # hello: hello
    print('hi:', obj.hi)        # hi: None
    print('BYE')


def test2():
    class MyObj(object):
        def __init__(self):
            self._mydict = {}

        # def __getattr__(self, item):
        #     self._mydict[item] = None
        #     return None

        def __getattribute__(self, item):
            if item == '_mydict':
                return object.__getattribute__(self, item)
            if item in self._mydict:
                return self._mydict[item]
            return None

        def __setattr__(self, item, val):
            if item == '_mydict':
                object.__setattr__(self, item, val)
                return
            self._mydict[item] = val

        def __str__(self):
            return '{}'.format(self._mydict)

    obj = MyObj()
    obj.hello = "hello"
    print('obj:', obj)          # obj: {'hello': 'hello'}
    print('hello:', obj.hello)  # hello: hello
    print('hi:', obj.hi)        # hi: None
    print('BYE')


def main():
    test1()
    test2()


if __name__ == '__main__':
    main()
