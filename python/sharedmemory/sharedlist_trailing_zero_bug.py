from multiprocessing.shared_memory import ShareableList
from multiprocessing import Process, Queue
from typing import Any, Iterable, Mapping


class MyProc(Process):
    def __init__(self, shmls, qu) -> None:
        super().__init__()
        self._shmls = shmls
        self._qu = qu

    def run(self) -> None:

        print('------ 1st iteration ------')
        for i in range(len(self._shmls)):
            self.print_item(i)
            self.print_bytes(i, 10)

        self._qu.put(None)
        self._qu.get()
        print('------ 2nd iteration ------')

        for i in range(len(self._shmls)):
            self.print_item(i)
            try:
                self.print_bytes(i, 10)
            except Exception as err:
                print('Error:', err)

    def print_item(self, i: int) -> None:
        print('{} (len: {})'.format(self._shmls[i], len(self._shmls[i])))

    def print_bytes(self, idx, size) -> None:
        for i in range(size):
            print(self._shmls[idx][i], end=' ')
        print()


def main():

    x = b'\1' + b'\2'
    print(x)

    qu = Queue()
    shmls = ShareableList([b'\1' * 10] * 10)

    proc = MyProc(shmls, qu)
    proc.start()

    qu.get()

    for i in range(len(shmls)):
        shmls[i] = b'\2' * (len(shmls[i]) - i + 1)

    qu.put(None)

    proc.join()


if __name__ == '__main__':
    main()
