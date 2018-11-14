import os
from multiprocessing import Process
import time
import sys

fifo_path = '/tmp/myfifo'

def receiver():
    
    while True:
        with open(fifo_path, 'r') as f:
            ret = f.read()
            if ret == '':
                break
            print("[RECEIVER] '{}'".format(ret))

    print('[RECEIVER] Done')


def main():

    if os.path.exists(fifo_path):
        os.unlink(fifo_path)
    try:
        os.mkfifo(fifo_path, 0666)
    except Exception as e:
        print(e)
        return
    
    p = Process(target=receiver)
    p.start()

    time.sleep(0.5)

    
    while True:
        try:
            x = raw_input()
        except Exception:
            x = input()
        
        with open(fifo_path, 'w') as fout:
            fout.write('{}'.format(x))
        
        if x == '':
            break

        print('USER INPUT -- {}'.format(x))

    fout.close()
    p.join()

    print('DONE')

if __name__ == '__main__':
    main()
