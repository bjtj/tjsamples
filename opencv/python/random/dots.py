import numpy as np
import cv2


def main():
    cv2.imshow('img', np.random.random([500, 500]))
    cv2.waitKey(0)

if __name__ == '__main__':
    main()
