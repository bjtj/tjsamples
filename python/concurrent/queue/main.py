import time
import threading
import queue


def worker(qu):
    while True:
        item = qu.get()
        if item is None:
            break
        print('worker -- {}'.format(item))
        qu.task_done()

    print('worker done')


def main():
    qu = queue.Queue()
    t = threading.Thread(target=worker, args=(qu,))
    t.start()

    for i in range(3):
        time.sleep(1)
        qu.put('hello {}'.format(i))

    qu.put(None)

    t.join()
        

if __name__ == '__main__':
    main()
