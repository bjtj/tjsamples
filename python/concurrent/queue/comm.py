import threading
import queue
import os
import sys
import time


class Item:
    def __init__(self):
        self._is_set = False

    def is_set(self):
        return self._is_set

    def set(self, val):
        self._val = val
        self._is_set = True

    def val(self):
        return self._val

def worker(que):
    i = 0
    while True:
        item = que.get()
        if item is None:
            print('BREAK - item is None')
            break
        time.sleep(1)
        item.set(i)
        i += 1


def main():
    que = queue.Queue()
    t = threading.Thread(target=worker, args=(que,))
    t.start()

    for i in range(10):
        item = Item()
        print('PUT')
        que.put(item)
        while not item.is_set():
            time.sleep(0.01)
        print('VALUE - {}'.format(item.val()))
        time.sleep(0.1)
    que.put(None)

if __name__ == '__main__':
    main()
