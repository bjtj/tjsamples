from time import time, sleep
from multiprocessing import shared_memory
from multiprocessing import Process, Queue
import math
import numpy as np
import logging
import hashlib

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class Writer(Process):
    def __init__(self, name: str, shm: shared_memory.SharedMemory, q: Queue, frame_size: int, frame_count: int):
        super().__init__()
        self.logger = logging.getLogger(name)
        self.name = name
        self.shm = shm
        self.q = q
        self.frame_size = frame_size
        self.frame_count = frame_count

    def run(self):
        frames = [np.random.randint(low=0, high=256, size=self.frame_size, dtype=np.uint8) for _ in range(self.frame_count)]
        hashes = [hashlib.md5(frame.tobytes()).digest() for frame in frames]
        self.q.put({ 'status': 'ready', 'hashes': hashes })
        while True:
            msg = self.q.get()
            self.logger.debug('msg: %s', msg)
            if msg is None:
                return
            if msg['op'] == 'write':
                tick = time()
                count = msg['count']
                self.logger.debug('START write... count: %s', count)
                for i in range(count):
                    self.shm.buf[i * self.frame_size: (i+1) * self.frame_size] = frames[i].tobytes()
                self.logger.debug('DONE %s sec.', time() - tick)
                self.q.put('done')


class Reader(Process):
    def __init__(self, name: str, shm: shared_memory.SharedMemory, q: Queue, frame_size: int, frame_count: int):
        super().__init__()
        self.logger = logging.getLogger(name)
        self.name = name
        self.shm = shm
        self.q = q
        self.frame_size = frame_size
        self.frame_count = frame_count

    def run(self):
        frames = []
        while True:
            msg = self.q.get()
            self.logger.debug('msg: %s', msg)
            if msg is None:
                return
            if msg['op'] == 'read':
                tick = time()
                count = msg['count']
                self.logger.debug('START read... count: %s', count)
                for i in range(count):
                    frame = np.frombuffer(self.shm.buf[i * self.frame_size: (i+1) * self.frame_size], dtype=np.uint8)
                    frames.append(frame)
                self.logger.debug('DONE %s sec.', time() - tick)
                hashes = [hashlib.md5(frame.tobytes()).digest() for frame in frames]
                self.q.put({ 'status': 'done', 'hashes': hashes })


def main():
    shape = (540, 720, 3)
    frame_size = math.prod(shape)
    count = 1100

    wqu = Queue()
    rqu = Queue()

    shm = shared_memory.SharedMemory(create=True, size=frame_size * count)

    writer = Writer('writer', shm, wqu, frame_size, count)
    reader = Reader('reader', shm, rqu, frame_size, count)

    writer.start()
    reader.start()

    wstatus = wqu.get()
    whases = wstatus['hashes']
    wqu.put({ 'op': 'write', 'count': count })
    wqu.get()
    rqu.put({ 'op': 'read', 'count': count })
    rret = rqu.get()
    rhashes = rret['hashes']

    logger.debug('whases == rhashes: %s', whases == rhashes)

    rqu.put(None)
    wqu.put(None)

    writer.join()
    reader.join()

    shm.unlink()


if __name__ == '__main__':
    main()