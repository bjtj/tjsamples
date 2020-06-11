

class Obj:
    count = 0
    def __init__(self):
        Obj.hello()
        Obj.countup()
        print(Obj.count)
    
    @staticmethod
    def hello():
        print('hello in static')

    @staticmethod
    def countup():
        Obj.count += 1
        # print(count) -- NameError: global name 'count' is not defined

    @classmethod
    def test_cm(cls):
        print(cls.count)
        print(Obj.count)
        # print(count) -- NameError: global name 'count' is not defined


    def test(self):
        # print(count) -- NameError: global name 'count' is not defined
        print(Obj.count)


def main():
    Obj()
    Obj()
    Obj.test_cm()
    
    obj = Obj()
    obj.test()
    obj.test_cm()               # valid
    obj.countup()               # valid


if __name__ == '__main__':
    main()
