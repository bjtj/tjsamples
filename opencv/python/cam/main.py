import cv2

def main():
    cap = cv2.VideoCapture(0)
    while True:
        _, frame = cap.read()
        frame = cv2.flip(frame, 1)
        cv2.imshow('preview', frame)

        key = cv2.waitKey(1)
        if key == ord('q'):
            break

if __name__ == '__main__':
    main()
