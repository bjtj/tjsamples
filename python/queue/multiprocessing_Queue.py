import multiprocessing as mp
import traceback
from time import time, sleep

def worker(mq):

    try:
        print('worker - start', flush=True)
        while True:
            if mq.get() is None:
                break
            sleep(1)
    
        print('worker - done', flush=True)
    finally:
        while not mq.empty():
            mq.get()


def main():
    mq = mp.Queue()
    p = mp.Process(target=worker, args=(mq,))
    p.start()
    print('Ctrl+c to quit.', flush=True)

    try:
        while True:
            if mq.qsize() < 10000:
                mq.put(time())
            else:
                sleep(0.01)
    finally:
        mq.put(None)
        p.join()
    

if __name__ == '__main__':
    main()
