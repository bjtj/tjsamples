# How to install Gstreamer Python Bindings #

<https://lifestyletransfer.com/how-to-install-gstreamer-python-bindings/>

## Dockerfile ##

```shell
docker build -t gstreamer:python /path/to/Dockerfile
xhost +local:  # To enable UI
sudo docker run --name gstreamer-python -it -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix gstreamer:python
```

