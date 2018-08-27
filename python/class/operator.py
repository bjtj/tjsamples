import inspect


def whoami(func):
    def wrapper(*args, **kwargs):
        print("\nCALL '{}':".format(func.__name__))
        if not args:
            print(' - args: <none>')
        else:
            lst = []
            for arg in args:
                if type(arg).__name__ == 'instance':
                    lst.append('<instance>')
                else:
                    lst.append('{}'.format(arg))
            print(' - args: {}'.format(', '.join(lst)))
                
        if not kwargs.items():
            print(' - kwargs: <none>')
        else:
            print(' - kwargs: {}'.format(', '.join(['{}: {}'.format(k,v) for k,v in kwargs.items()])))
        return func(*args, **kwargs)
    return wrapper

# https://stackoverflow.com/a/6307868
def whoami_for_all():
    def decorate(cls):
        for attr in cls.__dict__:
            if callable(getattr(cls, attr)):
                setattr(cls, attr, whoami(getattr(cls, attr)))
        return cls
    return decorate


@whoami
def hello():
    return 'hello'

    

@whoami
def plus(a, b):
    return a+b


@whoami_for_all()
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
        return "obj '{}'".format(self.__class__)

    def __repr__(self):
        return 'Obj()'


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


    child = Child()
    print(child)

if __name__ == '__main__':
    main()
