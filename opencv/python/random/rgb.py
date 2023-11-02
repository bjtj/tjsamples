#!/usr/bin/env python

import numpy as np
import cv2


def main():
    while True:
        image = np.random.randint(255, size=(500, 500, 3), dtype=np.uint8)
        cv2.imshow('random rgb (`q` to quit)', image)
        key = cv2.waitKey(1)
        if key == ord('q'):
            break


if __name__ == '__main__':
    main()
