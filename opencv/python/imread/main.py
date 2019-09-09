import cv2

def main():
    # https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_gui/py_image_display/py_image_display.html
    img = cv2.imread('Lenna.png', cv2.IMREAD_COLOR)
    h, w, c = img.shape
    print(f'width: {w}, height: {h}, channel: {c}')
    cv2.imshow('lena', img)
    cv2.waitKey(0)

if __name__ == '__main__':
    main()
