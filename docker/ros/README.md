# ROS Docker #

http://wiki.ros.org/docker/Tutorials/Docker


```
docker pull ros
docker run -ti ros
```

**Setup**

```
source /opt/ros/<ros version>/setup.bash
```

e.g.)

```
source /opt/ros/melodic/setup.bash
roscore
rostopic list # another terminal
```
