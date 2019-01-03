import cv2
import time
from datetime import datetime


def main():
    save = False
    cap = cv2.VideoCapture(0)
    flip = True
    while True:
        _, frame = cap.read()
        if flip:
            frame = cv2.flip(frame, 1)
        cv2.imshow('preview', frame)

        if save:
            t = datetime.now()
            date = t.strftime("%Y%m%d_%H%M%S.%f")[:-3]
            cv2.imwrite('preview/img-{}.jpg'.format(date), frame)

        key = cv2.waitKey(1)
        if key == ord('f'):
            flip = not flip
        elif key == ord('q'):
            break
        elif key == ord('s'):
            save = not save
            if save:
                print('START SAVE!')
            else:
                print('STOP SAVE!')

if __name__ == '__main__':
    main()
