import cv2
import numpy as np


def main():
    print(ord(' '))
    while True:
        cv2.imshow('preview', np.zeros([100, 100]))
        key = cv2.waitKey(1)
        if key == ord('q'):
            break
        if key != -1:
            print('KEY: {}'.format(key))

if __name__ == '__main__':
    main()
