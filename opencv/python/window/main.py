import cv2


def main():
    cap = cv2.VideoCapture(0)

    # cv2.namedWindow('preview', cv2.WINDOW_NORMAL)
    cv2.namedWindow('preview', cv2.WINDOW_GUI_NORMAL)
    cv2.resizeWindow('preview', 640, 480)
    
    while True:
        ret, frame = cap.read()
        frame = cv2.flip(frame, 1)
        cv2.imshow('preview', frame)
        key = cv2.waitKey(1)
        if key == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

    print('Done')

if __name__ == '__main__':
    main()
