import multiprocessing as mp
from multiprocessing import shared_memory, Process
from multiprocessing.shared_memory import ShareableList
import numpy as np
from time import sleep
from pyfps import Fps
import traceback


class ShmlsPool:
    def __init__(self, shmls):
        self._shmls = shmls
        self._frees = [i for i in range(len(shmls))]
        self._works = [None for _ in range(len(shmls))]
        self._worker_qu = mp.Queue()
        self._main_qu = mp.Queue()

    @property
    def shmls(self):
        return self._shmls

    @property
    def worker_qu(self):
        return self._worker_qu

    @property
    def main_qu(self):
        return self._main_qu

    def acquire(self):
        if len(self._frees) > 0:
            item = self._frees.pop(0)
            self._works.append(item)
            return item
        raise Exception('pool is busy.')

    def release(self, item):
        self._works.remove(item)
        self._frees.append(item)

    def consume_release(self):
        while not self.main_qu.empty():
            idx = self.main_qu.get()
            self.release(idx)

    def consume_all_worker_qu_remaining(self):
        cnt = 0
        while not self.worker_qu.empty():
            self.worker_qu.get()
            cnt += 1
        return cnt

    def set_work(self, idx):
        self.worker_qu.put(idx)
            
    def send_worker_sentinel(self):
        self.worker_qu.put_nowait(None)
        self.worker_qu.close()

    def unlink(self):
        self._shmls.shm.unlink()


def worker(pool):
    wfps = Fps(name='recv')
    indices = []
    try:
        while True:
            idx = pool.worker_qu.get()
            if idx is None:
                break
            data = pool.shmls[idx]
            indices.append(str(idx))
            if wfps.update():
                print('{} - {}'.format(len(indices), ', '.join(indices)), flush=True)
                indices = []
            pool.main_qu.put(idx)
    finally:
        cnt = pool.consume_all_worker_qu_remaining()
        print('consume all {}'.format(cnt), flush=True)

def main():
    COUNT = 1000
    WIDTH = 720
    HEIGHT = 540
    BIT = 3

    shmls = ShareableList([b'0' * (WIDTH * HEIGHT * BIT)] * COUNT)
    pool = ShmlsPool(shmls)
    rfps = Fps(name='send')

    done = False

    proc = Process(target=worker, args=(pool, ))
    proc.start()

    try:
        while not done:
            try:
                idx = pool.acquire()
                shmls[idx] = b'0' * (WIDTH * HEIGHT * BIT)
                pool.set_work(idx)
                rfps.update()
            except Exception as err:
                print(err)
                sleep(0.01)

            pool.consume_release()

    finally:
        pool.send_worker_sentinel()
        proc.join()
        pool.unlink()
        

if __name__ == '__main__':
    main()
