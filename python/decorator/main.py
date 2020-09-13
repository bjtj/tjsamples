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


def main():
    a = A()
    print(a.hello())
    print(a.bye())


if __name__ == '__main__':
    main()
