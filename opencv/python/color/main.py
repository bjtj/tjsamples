import cv2


def main():
    img = cv2.imread('Lenna.png', cv2.IMREAD_UNCHANGED)
    h, w, c = img.shape
    print(f'{w} x {h} x {c}')
    cv2.imshow('Lenna', img)
    cv2.waitKey(0)
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    cv2.imshow('Lenna', img)
    cv2.waitKey(0)

if __name__ == '__main__':
    main()
