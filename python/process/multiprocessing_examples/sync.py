from multiprocessing import Process, Lock


def f(lock, i):
    lock.acquire()
    print('hello world {}'.format(i))
    lock.release()


def main():
    lock = Lock()
    for num in range(10):
        Process(target=f, args=(lock, num)).start()

if __name__ == '__main__':
    main()
