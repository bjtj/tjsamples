from PyV4L2Camera.camera import Camera
import cv2
import numpy as np


camera = Camera('/dev/video0')
frame = camera.get_frame()

print(type(frame))
print(len(frame))

arr = np.frombuffer(frame, dtype=np.uint8)
print(arr.shape)
img = arr.reshape((480, 640, 3))
print(img.shape)

img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

cv2.imshow('preview', img)
cv2.waitKey(0)
