from multiprocessing import shared_memory, Process, Queue
from time import sleep
from pyfps import Fps
import signal

def do_work(num):
    pass

def foo(sl, qu):
    fps = Fps(name='foo')
    while True:
        item = qu.get()
        if item is None:
            break
        fps.update()
        sleep(0.2)
        do_work(sl[item])
        # print('', flush=True)

def main():
    done = False
    fps = Fps(name='main')
    qu = Queue()
    sl = shared_memory.ShareableList([1,2,3])
    p = Process(target=foo, args=(sl,qu,))
    p.start()

    def sighandle():
        global done
        done = True

    signal.signal(signal.SIGINT, sighandle)

    idx = 0
    while not done:
        fps.update()
        if qu.empty():
            i = idx % len(sl)
            sl[i] = idx
            qu.put(i)
            idx += 1

    qu.put(None)
    p.join()
    print('DONE.')

if __name__ == '__main__':
    main()
