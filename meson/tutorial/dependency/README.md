# Adding dependencies #

<https://mesonbuild.com/Tutorial.html>

```shell
sudo apt install libgtk-3-dev
```

```shell
$ meson setup builddir
$ cd builddir
$ ninja
```

If your Meson version is newer than 0.55.0

```shell
$ cd builddir
$ meson compile
```
