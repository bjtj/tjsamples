import cv2
import numpy as np


def main():
    height = 512
    width = 512
    img = np.zeros((height,width,3), np.uint8)
    cv2.imshow('preview', img)
    cv2.waitKey(0)


if __name__ == '__main__':
    main()
