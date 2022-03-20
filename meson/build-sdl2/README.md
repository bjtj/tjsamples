# Building a simple SDL2 app from scratch #

<https://mesonbuild.com/GuiTutorial.html>

With this done we can start the build with the following command:

```shell
meson builddir
```

The program is compiled with this:

```shell
meson compile -C builddir
```

The program will be in the build directory and can be run like this:

```shell
builddir\sdlprog
```

SDL2 dependency 추가

```shel
$ mkdir subprojects
$ meson wrap install sdl2
Installed sdl2 version 2.0.20 revision 1
```
