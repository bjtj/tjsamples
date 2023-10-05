import queue


class ItemA:
    def __init__(self, data):
        self._data = data

    @property
    def data(self):
        return self._data


class ItemB:
    def __init__(self, data1, data2):
        self._data1 = data1
        self._data2 = data2

    @property
    def data1(self):
        return self._data1

    @property
    def data2(self):
        return self._data2


def main():
    
    qu = queue.Queue()

    assert(qu.empty())

    qu.put(1)

    assert(not qu.empty())


    qu.put(ItemA('hello'))
    qu.put(ItemB('good morning', 'good bye'))

    assert(type(qu.get()) == int)
    assert(type(qu.get()) == ItemA)
    assert(type(qu.get()) == ItemB)

    # KeyboardInterrupt is not work on Queue.get()... >:(

    try:
        print('get with timeout 1sec.')
        qu.get(True, 1)
    except queue.Empty:
        print('queue.Empty!')


    # clear queue

    qu.put(1)
    qu.put(2)

    assert(not qu.empty())
    qu.queue.clear()
    assert(qu.empty())

    # clear queue with mutex (thread safe)

    qu.put(1)
    qu.put(2)

    assert(not qu.empty())
    with qu.mutex:
        qu.queue.clear()
    assert(qu.empty())


if __name__ == '__main__':
    main()
