import multiprocessing as mp
from time import sleep

def worker(mq):
    try:
        while True:
            if mq.get() is None:
                break
            sleep(1)        
    finally:
        while not mq.empty():
            mq.get()
        print('worker - bye', flush=True)


def main():
    mq = mp.Queue()
    p = mp.Process(target=worker, args=(mq,))
    p.start()

    idx = 0
    while True:
        mq.put(idx)
        idx += 1

    mq.put(None)
    p.join()

if __name__ == '__main__':
    main()
