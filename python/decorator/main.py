#!/usr/bin/env python

def _printer(*args):
    print(args)


def log(fname, printer, func):
    def wrap(*args, **kwargs):
        printer('++', fname)
        ret = func(*args, **kwargs)
        printer('--', fname)
        return ret
    return wrap


def log_all_methods(decorator, printer):
    def decorate(cls):
        for attr in cls.__dict__:
            print('ATTR', attr)
            if callable(getattr(cls, attr)):
                setattr(cls, attr, decorator(attr, printer, getattr(cls, attr)))
        return cls
    return decorate


@log_all_methods(log, _printer)
class A:
    def _say(self, msg):
        print('say:', msg)

    def hello(self):
        self._say('hello')
        return 1

    def bye(self):
        self._say('bye')
        return 2

# --------------------------------

def simple(func):
    def _wrapper(*args, **kwargs):
        print(' ++ @SIMPLE ++', func)
        ret = func(*args, **kwargs)
        print(' -- @SIMPLE --', func)
        print(' -- @SIMPLE -- RET:', ret)
        return ret
    return _wrapper


@simple
def foo():
    print('hello foo')


@simple
def bar(arg1):
    print('hello bar', arg1)
    return arg1
    


# == MAIN ==
def main():
    a = A()
    print(a.hello())
    print(a.bye())
    foo()
    bar('ARG1')


if __name__ == '__main__':
    main()
