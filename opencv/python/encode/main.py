import cv2
import numpy as np


def main():
    with open('Lenna.png', 'rb') as f:
        arr = np.fromfile(f, np.uint8)
        print(np.shape(arr))
        img = cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
        if img is not None:
            cv2.imshow('preview', img)
            cv2.waitKey(0)

            ret, jpg = cv2.imencode('.jpg', img)
            if ret:
                with open('lenna.jpg', 'wb') as f:
                    jpg.tofile(f)

    print('raw data size: {}'.format(img.size))
    print('compressed data size: {}'.format(jpg.size))
    print('compression: {:.0f} %'.format(float(jpg.size) / img.size * 100))
                

if __name__ == '__main__':
    main()
