import cv2
import time
from datetime import datetime


def main():
    save = False
    cap = cv2.VideoCapture(0)
    while True:
        _, frame = cap.read()
        frame = cv2.flip(frame, 1)
        cv2.imshow('preview', frame)

        if save:
            t = datetime.now()
            date = t.strftime("%Y%m%d_%H%M%S.%f")[:-3]
            cv2.imwrite('preview/img-{}.jpg'.format(date), frame)

        key = cv2.waitKey(1)
        if key == ord('q'):
            break
        if key == ord('s'):
            save = ~save
            if save:
                print('START SAVE!')
            else:
                print('STOP SAVE!')

if __name__ == '__main__':
    main()
