from threading import Thread
import time


class MyThread(Thread):
    def __init__(self):
        super(MyThread, self).__init__(daemon=True, name='MY-THREAD')

    def run(self):
        print('MY THREAD / sleep 3 sec.')
        time.sleep(3)
        raise ValueError
