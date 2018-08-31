from signal import *
import sys, time
import os


def handler(*args):
    print('signal handler')
    for arg in args:
        print('* arg: {}'.format(arg))
    exit(1)

def main():
    for sig in (SIGABRT, SIGINT, SIGTERM):
        signal(sig, handler)

    print('PID: {}'.format(os.getpid()))
        
    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()

