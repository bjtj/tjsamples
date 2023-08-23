
def foo(*args, **kwargs):
    print('--- foo ---')
    print('args: {}'.format(args))
    print('kwargs: {}'.format(kwargs))
    return args, kwargs

def bar():
    return 1

def bar2():
    return (1,)

def baz():
    return 1, {'a': 1, 'b': 2}

def baz2():
    return ({'a': 1, 'b': 2},)

def main():
    foo('a')
    foo('a', 'b')
    foo('a', 'b', name='steve', age=23)

    # foo('a', name='steve', 'b', age=23)
    # SyntaxError: positional argument follows keyword argument

    print('--------')

    print('=== bar() ===')

    ret = bar()
    print('result: {}'.format(ret))

    print(type(ret) is tuple)    # False

    print('=== bar2() ===')

    ret = bar2()
    print('result: {}'.format(ret))

    print(type(ret) is tuple)    # True
    print(type(ret[-1]) is dict) # False
    
    foo(*ret)
    # foo(*ret[:-1], **ret[-1])

    print('=== baz() ===')

    ret = baz()
    print('result: {}'.format(ret))

    print(type(ret) is tuple)    # True
    print(type(ret[-1]) is dict) # True
    
    foo(*ret)
    foo(*ret[:-1], **ret[-1])

    print('=== baz2() ===')

    ret = baz2()
    print('result: {}'.format(ret))

    print(type(ret) is tuple)    # True
    print(type(ret[-1]) is dict) # True
    
    foo(*ret)
    foo(*ret[:-1], **ret[-1])


if __name__ == '__main__':
    main()
