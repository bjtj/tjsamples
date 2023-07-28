import cv2
import numpy as np
import urllib.request as urllib


def main():

    lenna_url = 'https://upload.wikimedia.org/wikipedia/ko/2/24/Lenna.png'

    req = urllib.urlopen(lenna_url)
    arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
    img = cv2.imdecode(arr, -1)
    
    # height = 512
    # width = 512
    # img = np.zeros((height,width,3), np.uint8)
    cv2.imwrite('image.jpg', img)
    cv2.imwrite("image_q100.jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 100])
    cv2.imwrite("image_q0.jpg", img, [cv2.IMWRITE_JPEG_QUALITY, 0])
    cv2.imwrite('image.png', img)
    cv2.imwrite('image_cmp0.png', img, [int(cv2.IMWRITE_PNG_COMPRESSION),0])
    cv2.imwrite('image_cmp9.png', img, [int(cv2.IMWRITE_PNG_COMPRESSION),9])

if __name__ == '__main__':
    main()
