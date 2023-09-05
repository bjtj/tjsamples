import multiprocessing as mp
from multiprocessing.shared_memory import ShareableList
from pyfps import Fps
from time import sleep, time
import numpy as np
import hashlib

def hashfunc(bytes):
    return hashlib.md5(bytes).digest()

def _worker_pipe(name, sl, cp):
    fps = Fps(name=name)
    tick = time()
    while True:
        if time() - tick >= 15:
            break
        item = cp.recv()
        if item is None:
            break

        fps.update()

        idx, hash = item
        ret = hashfunc(sl[idx])
        if ret != hash:
            print('Hash not matched!', idx, hash, ret, flush=True)

    print('worker - DONE')


def test_pipe():
    pp, cp = mp.Pipe()
    SYNC_FPS = 120
    COUNT = int(SYNC_FPS * 2)
    WIDTH = 1080
    HEIGHT = 1440

    fps = Fps(name='main')

    ba = [np.random.randint(low=0, high=256, size=(HEIGHT, WIDTH), dtype=np.uint8).tobytes()] * COUNT
    hashes = [hashfunc(bytes) for bytes in ba]

    sl = ShareableList([b'0' * (WIDTH * HEIGHT)] * COUNT)
    # sl = ShareableList(ba)

    tick = time()

    idx = 0
    p = mp.Process(target=_worker_pipe, args=('worker-pipe1', sl, cp))
    p.start()

    while True:
        if time() - tick >= 10.0:
            break

        fps.update()

        bytes = ba[idx]
        hash = hashes[idx]

        sl[idx] = bytes

        pp.send((idx, hash))
        idx += 1
        idx %= COUNT

    pp.send(None)
    p.join()
    p.close()
    print('DONE.')


def _worker_queue(name, sl, qu):
    fps = Fps(name=name)
    tick = time()
    while True:
        if time() - tick >= 15:
            break
        item = qu.get()
        if item is None:
            break

        fps.update()

        idx, hash = item
        ret = hashfunc(sl[idx])
        if ret != hash:
            print('Hash not matched!', idx, hash, ret, flush=True)

    print('worker - DONE')


def test_queue():
    SYNC_FPS = 120
    COUNT = int(SYNC_FPS * 2)
    WIDTH = 1080
    HEIGHT = 1440

    fps = Fps(name='main')

    ba = [np.random.randint(low=0, high=256, size=(HEIGHT, WIDTH), dtype=np.uint8).tobytes()] * COUNT
    hashes = [hashfunc(bytes) for bytes in ba]

    sl = ShareableList([b'0' * (WIDTH * HEIGHT)] * COUNT)
    # sl = ShareableList(ba)
    qu = mp.Queue()

    tick = time()

    idx = 0
    p = mp.Process(target=_worker_queue, args=('worker-queue1', sl, qu))
    p.start()

    while True:
        if time() - tick >= 10.0:
            break

        fps.update()

        bytes = ba[idx]
        hash = hashes[idx]

        sl[idx] = bytes

        qu.put((idx, hash))
        idx += 1
        idx %= COUNT

    qu.put(None)
    p.join()
    p.close()
    print('DONE.')


def main():
    test_pipe()
    print('', flush=True)
    test_queue()

if __name__ == '__main__':
    main()
