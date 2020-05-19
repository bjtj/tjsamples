# PyV4L2Camera #

<https://pypi.org/project/PyV4L2Camera/>

```
# apt-get install libv4l-dev
```

```
$ pip install PyV4L2Camera
```

```
from PyV4L2Camera.camera import Camera

camera = Camera('/dev/video0')
frame = camera.get_frame()
```
