class MyException(Exception):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


def main():
    try:
        raise MyException()
    except MyException as err:
        if str(err):
            print('1')
        else:
            print('2')          # <--

    try:
        raise MyException('hello')
    except MyException as err:
        if str(err):
            print('1')          # <--
        else:
            print('2')
    

if __name__ == '__main__':
    main()
