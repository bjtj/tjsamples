from __future__ import print_function
import time

def main():
    prog = ['|', '/', '-', '\\', '|', '/', '-', '\\']
    print(prog)
    for i in range(100):
        print('PROGRESS: {}'.format(prog[i % len(prog)]), end='\r')
        time.sleep(0.2)

    print('')

if __name__ == '__main__':
    main()
