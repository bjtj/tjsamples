#!/usr/bin/env python
import os
import cv2
import time
from datetime import datetime


def main():
    seq = 0
    save = False
    cap = cv2.VideoCapture(0)
    print(cap.isOpened())
    flip = False
    while True:
        ret, frame = cap.read()

        if not ret:
            print('read() failed')
            time.sleep(1)
            continue

        if flip:
            frame = cv2.flip(frame, 1)
        seq += 1
        cv2.putText(frame, 'Seq: {}'.format(seq), (50, 50),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 128, 0), 3, cv2.LINE_AA)
        cv2.imshow('preview', frame)

        if save:
            write_image('preview', frame)

        key = cv2.waitKey(1)
        if key == ord('f'):
            flip = not flip
            print('flip: {}'.format(flip))
        elif key == ord('q'):
            print('quit')
            break
        elif key == ord('r'):
            save = not save
            if save:
                print('START RECORDING')
            else:
                print('STOP RECORDING')
        elif key == ord('s'):
            print('SNAPSHOT')
            write_image('snapshot', frame)

    cap.release()
    cv2.destroyAllWindows()


def write_image(dirpath, frame):
    if not os.path.exists(dirpath):
        os.makedirs(dirpath)
    t = datetime.now()
    date = t.strftime("%Y%m%d_%H%M%S.%f")[:-3]
    writepath = os.path.join(dirpath, 'img-{}.jpg'.format(date))
    cv2.imwrite(writepath, frame)


if __name__ == '__main__':
    main()
