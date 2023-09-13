import multiprocessing as mp
from time import sleep

def _foo():
    print('foo -- bye...')

def _foo_err():
    raise Exception('error...')
    print('foo -- bye...')

def test1():
    p = mp.Process(target=_foo)
    p.start()
    sleep(1)
    p.join()

def test2():
    p = mp.Process(target=_foo_err)
    p.start()
    sleep(1)
    p.join()

def main():
    test1()
    test2()

if __name__ == '__main__':
    main()
