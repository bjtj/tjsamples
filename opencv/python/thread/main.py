import cv2
import queue
import threading

class Share:
    def __init__(self):
        self.qu = queue.Queue()
        self.finish = False


def cv_thread(share):
    while share.finish is False:
        frame = share.qu.get()
        if frame is None:
            share.finish = True
        cv2.imshow('preview', frame)
        key = cv2.waitKey(1)
        if key == ord('q'):
            share.finish = True
        share.qu.task_done()

    print('done -- cv thread')


def main():
    share = Share()
    t = threading.Thread(target=cv_thread, args=(share,))
    t.start()
    cap = cv2.VideoCapture(0)
    while share.finish is False:
        _, frame = cap.read()
        frame = cv2.flip(frame, 1)
        share.qu.put(frame)

    share.qu.put(None)
    t.join()
    print('done')

if __name__ == '__main__':
    main()
