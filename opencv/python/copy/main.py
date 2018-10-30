import cv2

def main():
    cap = cv2.VideoCapture(1)
    _, frame = cap.read()
    img = frame.copy()

    cv2.rectangle(img, (10, 10), (40, 40), (0, 255, 0), 1)

    cv2.rectangle(frame, (20, 20), (80, 80), (255, 0, 0), 2)

    cv2.imshow('a', img)
    cv2.imshow('b', frame)

    cv2.waitKey(0)

if __name__ == '__main__':
    main()
