import cv2


def main():
    cap = cv2.VideoCapture(1)
    _, frame = cap.read()

    cv2.putText(frame, 'hello', (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 128, 0), 3, cv2.LINE_AA)
    cv2.putText(frame, 'hello', (60, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 128, 0), 1, cv2.LINE_AA)
    cv2.rectangle(frame, (30, 30), (70, 70), (255, 0, 0), 3)

    cv2.imshow('preview', frame)

    cv2.waitKey(0)

if __name__ == '__main__':
    main()
