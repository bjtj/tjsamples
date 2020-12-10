#!/usr/bin/env python

from PyV4L2Camera.camera import Camera
import cv2
import numpy as np


camera = Camera('/dev/video0')


def update():
    frame = camera.get_frame()
    arr = np.frombuffer(frame, dtype=np.uint8)
    img = arr.reshape((1080, 1920, 3))
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    return img


def main():
    while True:
        img = update()
        cv2.imshow('preview', img)
        key = cv2.waitKey(1)
        if key == ord('q'):
            break
    print('DONE')


if __name__ == '__main__':
    main()
