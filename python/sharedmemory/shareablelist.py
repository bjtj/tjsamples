from typing import List
from time import sleep
from multiprocessing.shared_memory import ShareableList
from multiprocessing import Process, Queue

class Context:
    def __init__(self, sl: ShareableList, qu: Queue=None):
        self._sl = sl
        self._qu = qu if qu is not None else Queue()

    @property
    def sl(self):
        return self._sl

    @property
    def qu(self):
        return self._qu


class MainProcess(Process):
    def __init__(self, context: Context):
        super().__init__()
        self._context = context

    def run(self):
        while True:
            item = self._context.qu.get()
            if item is None:
                break
            print('main process', self._context.sl[item])
            print('')

class ChildProcess(Process):
    def __init__(self, context: Context):
        super().__init__()
        self._context = context

    def run(self):
        self._grandchild_proc = GrandChildProcess(self._context)
        self._grandchild_proc.start()
        self._grandchild_proc.join()


class GrandChildProcess(Process):
    def __init__(self, context: Context):
        super().__init__()
        self._context = context

    def run(self):
        while True:
            item = self._context.qu.get()
            if item is None:
                break
            print('grandchild process', self._context.sl[item])
            print('')

class SoloProcess(Process):
    def __init__(self, context: Context):
        super().__init__()
        self._context = context

    def run(self):
        while True:
            item = self._context.qu.get()
            if item is None:
                break
            print('solo process', self._context.sl[item])
            print('')



def main():
    sl = ShareableList([1,2,3])
    main_qu = Queue()
    child_qu = Queue()
    solo_qu = Queue()
    main_proc = MainProcess(Context(sl, main_qu))
    child_proc = ChildProcess(Context(sl, child_qu))
    solo_proc = SoloProcess(Context(sl, solo_qu))

    main_proc.start()
    child_proc.start()
    solo_proc.start()

    sleep(1)

    main_qu.put(0)
    child_qu.put(1)
    solo_qu.put(2)

    sleep(1)
    print('==================')

    sl[0] = 3
    sl[1] = 2
    sl[2] = 1

    sleep(1)

    main_qu.put(0)
    child_qu.put(1)
    solo_qu.put(2)

    sleep(2)
    print('SENTINEL')

    main_qu.put(None)
    child_qu.put(None)
    solo_qu.put(None)

    main_proc.join()
    child_proc.join()
    solo_proc.join()


if __name__ == '__main__':
    main()
