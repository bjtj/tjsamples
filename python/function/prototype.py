

def foo(*args, **kwargs):
    print('args: {}'.format(args))
    print('kwargs: {}'.format(kwargs))

def bar(a, b, c):
    print(a, b, c)

def main():
    foo(1, 2, 3, name='steve', age=23)
    foo()

    bar(1, 2, 3)
    try:
        bar(1, 2)
    except TypeError as e:
        print(e)

if __name__ == '__main__':
    main()