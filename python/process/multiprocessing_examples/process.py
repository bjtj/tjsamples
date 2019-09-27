from multiprocessing import Process
import os

def info(title):
    print(title)
    print('module name: {}'.format(__name__))
    if hasattr(os, 'getppid'):
        print('parent process: {}'.format(os.getppid()))
    print('process id: {}'.format(os.getpid()))


def f(name):
    info('function f')
    print('hello {}'.format(name))


def main():
    info('main line')
    p = Process(target=f, args=('bob',))
    p.start()
    p.join()


if __name__ == '__main__':
    main()
