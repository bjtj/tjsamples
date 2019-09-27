
def whoami_func(func):
    def wrapper(*args, **kwargs):
        print('====')
        print("Function Name: '{}':".format(func.__name__))
        if not args:
            print(' - args: <none>')
        else:
            lst = []
            for arg in args:
                lst.append('{} {}'.format(type(arg), arg))
            print(' - args: {}'.format(', '.join(lst)))
                
        if not kwargs.items():
            print(' - kwargs: <none>')
        else:
            lst = ['{}: {}'.format(k, v) for k, v in kwargs.items()]
            print(' - kwargs: {}'.format(', '.join(lst)))
        print('----')
        return func(*args, **kwargs)
    return wrapper


def whoami_method(method):
    def wrapper(*args, **kwargs):
        print('====')
        print("Method Name: '{}':".format(method.__name__))
        if len(args) == 1:
            print(' - args: <none>')
        else:
            lst = []
            for arg in args[1:]:
                lst.append('{} {}'.format(type(arg), arg))
            print(' - args: {}'.format(', '.join(lst)))
                
        if not kwargs.items():
            print(' - kwargs: <none>')
        else:
            lst = ['{}: {}'.format(k, v) for k, v in kwargs.items()]
            print(' - kwargs: {}'.format(', '.join(lst)))
        print('----')
        return method(*args, **kwargs)
    return wrapper


# https://stackoverflow.com/a/6307868
def whoami_method_for_all():
    def decorate(cls):
        for attr in cls.__dict__:
            if callable(getattr(cls, attr)):
                setattr(cls, attr, whoami_method(getattr(cls, attr)))
        return cls
    return decorate


@whoami_func
def hello():
    return 'hello'
    

@whoami_func
def plus(a, b):
    return a + b


@whoami_method_for_all()
class Obj:
    def __init__(self):
        self._table = {}
        
    def __getitem__(self, key):
        if isinstance(key, slice):
            return key
        return self._table[key]

    def __setitem__(self, key, value):
        if isinstance(key, slice):
            print('SLICE')
            return

        self._table[key] = value

    def __str__(self):
        return "Obj::__str__ '{}'".format(self.__class__)

    def __repr__(self):
        return 'Obj()'

    def custom(self, num, flag='1'):
        print(num, flag)

    def custom2(self, flag='1'):
        print(flag)


class Child(Obj):
    pass


def main():
    print(hello())
    print(plus(1,2))
    
    obj = Obj()
    obj['hello'] = 'hi'
    obj['a':'c'] = 'xxx'
    print(obj['hello'])
    print(obj[1:3])
    print(obj['x':'y'])
    print(obj)
    print(type(eval(repr(obj))))

    obj.custom(1)
    obj.custom(1, flag='x')
    obj.custom2()
    obj.custom2(flag='x')

    child = Child()
    print(child)


if __name__ == '__main__':
    main()
