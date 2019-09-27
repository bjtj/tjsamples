import time


def main():
    idx = 0
    while True:
        idx += 1
        print('loop {}'.format(idx))
        time.sleep(1)


if __name__ == '__main__':
    main()
