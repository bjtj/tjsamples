import os
import sys


def main():

    print(sys)

    print(sys.version_info)

    print(sys.hexversion)

    print('python {}'.format(sys.version_info[0]))

    for k, v in globals().items():
        print('{}: {}'.format(k, v))

    print(os.environ)
    print('PATH:', os.environ.get('PATH', ''))

    print(os.getenv('MYVAL', 'default-my-value'))
    print(int(os.getenv('MYVAL2', '123')))


if __name__ == '__main__':
    main()
