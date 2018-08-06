# Box2D

* http://box2d.org/

## github

* https://github.com/erincatto/Box2D


e.g.)

```
$ git clone https://github.com/erincatto/Box2D.git
$ cd Box2D
$ git checkout tags/v2.3.1
```

## Build

* check `Building.txt` file

```
$ premake4 gmake
$ cd Build/gmake
$ make # or make config="release"
```


### `undefined reference to ``glfw***`` `

```
$ apt install libglew-dev xorg-dev libglfw3-dev

```

edit `Build/gmake/Testbed.make` 

e.g.)
```
LIBS += bin/Debug/libBox2D.a bin/Debug/libGLUI.a -lX11 -lGL -lGLU -lglut -lGLEW -lglfw -lX11 -lXxf86vm -lpthread -lXrandr -lXi
```
