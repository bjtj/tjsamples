#!/usr/bin/env python
from set_hook import set_hook
from my_thread import MyThread
import time


set_hook()


def main():
    set_hook()
    thread = MyThread()
    thread.start()
    time.sleep(5)
    thread.join()


if __name__ == '__main__':
    main()
