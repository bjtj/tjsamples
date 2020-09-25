#!/usr/bin/env python

import numpy as np
import cv2


def main():
    cv2.namedWindow('image')
    while True:
        image = np.random.randint(255, size=(30, 30, 3), dtype=np.uint8)
        cv2.imshow('image', image)
        key = cv2.waitKey(0)
        if key == ord('q'):
            break


if __name__ == '__main__':
    main()
