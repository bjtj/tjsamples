import os
import sys
import threading
import time


def work():
    with open('out.txt', 'w') as f:
        for i in range(10):
            print(i)
            f.write('{}\n'.format(i))
            time.sleep(0.5)


def main():
    thread = threading.Thread(target=work)
    thread.daemon = True
    thread.start()
    thread.join()


if __name__ == '__main__':
    main()
