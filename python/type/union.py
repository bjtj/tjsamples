from typing import Union, List


def foo(x: Union[str, List[str]]):
    print(type(x))

    if type(x) == 'string':
        print('x is string - {}'.format(x))
    else:
        print('x is string[] - {}'.format(', '.join(x)))


def main():
    foo('a')
    foo(['b', 'c', 'd'])
    foo([])

if __name__ == '__main__':
    main()
