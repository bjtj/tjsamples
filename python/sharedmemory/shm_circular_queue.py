from typing import Generic, TypeVar
from enum import Enum
import multiprocessing as mp
from multiprocessing.shared_memory import SharedMemory
import logging
from copy import copy
from time import sleep

logging.basicConfig(level=logging.DEBUG)

class OverflowError(Exception):
    pass

class UnderflowError(Exception):
    pass

T = TypeVar('T')

class ReadWriteQueue(Generic[T]):
    def __init__(self, read_queue: 'mp.Queue[T]' = None, write_queue: 'mp.Queue[T]' = None):
        self._read_queue: 'mp.Queue[T]' = mp.Queue() if read_queue is None else read_queue
        self._write_queue: 'mp.Queue[T]' = mp.Queue() if write_queue is None else write_queue

    @property
    def read_queue(self) -> 'mp.Queue[T]':
        return self._read_queue

    @property
    def write_queue(self) -> 'mp.Queue[T]':
        return self._write_queue

    def reverse(self) -> 'ReadWriteQueue[T]':
        return ReadWriteQueue(self._write_queue, self._read_queue)


class ShmCircularQueueOperation:
    def __init__(self, current_item_count: int, front: int, rear: int):
        self._current_item_count = current_item_count
        self._front: int = front
        self._rear: int = rear

    @property
    def current_item_count(self) -> int:
        return self._current_item_count

    @property
    def front(self) -> int:
        return self._front

    @property
    def rear(self) -> int:
        return self._rear

    def apply(self, shmqueue: 'ShmCircularQueue'):
        shmqueue._front = self._front
        shmqueue._rear = self._rear
        shmqueue._current_item_count = self._current_item_count


class ShmCircularQueue:

    class BufferView:
        def __init__(self, buf: memoryview, range: tuple[int, int]) -> None:
            self._buf = buf
            self._range = range

        @property
        def buf(self) -> memoryview:
            return self._buf

        @property
        def range(self) -> tuple[int, int]:
            return self._range

        def read(self) -> bytes:
            return bytes(self._buf[self._range[0]:self._range[1]])


    def __init__(self, item_size: int, item_count: int, wrq: 'ReadWriteQueue[ShmCircularQueueOperation]'=None) -> None:
        self._item_size = item_size
        self._item_count = item_count
        self._shm = SharedMemory(create=True, size=self._item_size * self._item_count)
        self._current_item_count = 0
        self._front: int = 0
        self._rear: int = 0
        self._wrq = wrq

    @property
    def buffer(self) -> memoryview:
        return self._shm.buf

    @property
    def empty(self) -> bool:
        return self._current_item_count == 0

    @property
    def full(self) -> bool:
        return self._current_item_count == self._item_count

    def put(self, item: bytes) -> None:
        if len(item) != self._item_size:
            raise ValueError('Item size mismatch')
        _next_front = (self._front + 1) % self._item_count
        if self.full:
            raise OverflowError('Queue is full')
        self.buffer[self._front * self._item_size:(self._front + 1) * self._item_size] = item
        self._front = _next_front
        self._current_item_count += 1
        self._noti_operation()

    def get(self) -> BufferView:
        if self.empty:
            raise UnderflowError('Queue is empty')
        range = (self._rear * self._item_size, (self._rear + 1) * self._item_size)
        self._rear = (self._rear + 1) % self._item_count
        self._current_item_count -= 1
        self._noti_operation()
        return ShmCircularQueue.BufferView(self.buffer, range)

    def sync_operations(self):
        if self._wrq is None:
            return
        while not self._wrq.read_queue.empty():
            operation = self._wrq.read_queue.get()
            if operation is not None:
                operation.apply(self)

    def _noti_operation(self):
        if self._wrq is None:
            return
        self._wrq.write_queue.put(ShmCircularQueueOperation(self._current_item_count, self._front, self._rear))

    def reverse(self):
        cloned = copy(self)
        cloned._wrq = self._wrq.reverse()
        return cloned


def main():

    q = ShmCircularQueue(4, 5)
    assert q.empty == True

    q.put(b'abcd')
    assert q.empty == False

    q.put(b'efgh')
    assert q.full == False

    q.put(b'ijkl')
    q.put(b'mnop')
    q.put(b'qrst')
    assert q.full == True

    assert q.buffer == b'abcd' + b'efgh' + b'ijkl' + b'mnop' + b'qrst'

    try:
        q.put(b'uvwx')
        assert False
    except OverflowError as e:
        print(e)

    assert q.get().read() == b'abcd'
    q.put(b'uvwx')

    assert q.buffer == b'uvwx' + b'efgh' + b'ijkl' + b'mnop' + b'qrst'

    assert q.get().read() == b'efgh'
    assert q.get().read() == b'ijkl'
    assert q.get().read() == b'mnop'
    assert q.get().read() == b'qrst'
    assert q.get().read() == b'uvwx'

    try:
        q.get().read()
        assert False
    except UnderflowError as e:
        print(e)

    print('========== test multiprocess ==========')
    test_multiprocess()


class QueueMessage:
    def __init__(self, op: str, data: bytes) -> None:
        self._op = op
        self._data = data

    @property
    def op(self) -> str:
        return self._op

    @property
    def data(self) -> bytes:
        return self._data


class Writer(mp.Process):
    def __init__(self, shmqueue: ShmCircularQueue, mq: 'mp.Queue[QueueMessage]') -> None:
        super().__init__()
        self._logger = logging.getLogger(self.__class__.__name__)
        self._shmqueue = shmqueue
        self._mq = mq

    def run(self) -> None:
        while True:
            if not self._mq.empty():
                msg = self._mq.get()
                if msg is None:
                    return
                if msg.op == 'write':
                    try:
                        self._logger.debug('writing data: %s', msg.data)
                        self._shmqueue.put(msg.data)
                    except Exception as e:
                        self._logger.error('error - %s', e)
            self._shmqueue.sync_operations()


class Reader(mp.Process):
    def __init__(self, shmqueue: ShmCircularQueue, mq: 'mp.Queue[QueueMessage]') -> None:
        super().__init__()
        self._logger = logging.getLogger(self.__class__.__name__)
        self._shmqueue = shmqueue
        self._mq = mq

    def run(self) -> None:
        while True:
            if not self._mq.empty():
                msg = self._mq.get()
                if msg is None:
                    return
            try:
                view = self._shmqueue.get()
                self._logger.debug('data: %s', view.read())
            except Exception as e:
                self._logger.error('error - %s', e)
                sleep(1)
            self._shmqueue.sync_operations()


def test_multiprocess():
    wrq = ReadWriteQueue[ShmCircularQueueOperation]()
    shmqueue = ShmCircularQueue(4, 5, wrq)
    writer_queue: mp.Queue[QueueMessage] = mp.Queue()
    reader_queue: mp.Queue[QueueMessage] = mp.Queue()
    writer = Writer(shmqueue, writer_queue)
    reader = Reader(shmqueue.reverse(), reader_queue)

    writer.start()
    reader.start()

    sleep(1)

    data = b'abcd' + b'efgh' + b'ijkl' + b'mnop' + b'qrst' + b'uvwx' + b'yz12'
    for i in range(50):
        x = i % 7
        d = data[x * 4: (x + 1) * 4]
        writer_queue.put(QueueMessage('write', d))

    sleep(1)

    writer_queue.put(None)
    reader_queue.put(None)

    writer.join()
    reader.join()


if __name__ == '__main__':
    main()
