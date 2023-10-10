from inspect import getmembers

def foo():
    pass


def bar(arg1, arg2):
    pass


def print_func(func):
    print('================================================== FUNC')
    print(func.__name__)
    members = getmembers(func)
    for m in members:
        print(m)

    print('================================================== CODE')
    print(func.__code__)
    print(type(func.__code__))
        
    members = getmembers(func.__code__)
    for m in members:
        print(m)


def main():
    print_func(foo)
    print_func(bar)

if __name__ == '__main__':
    main()
