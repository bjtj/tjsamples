# Tutorial #

<https://mesonbuild.com/Tutorial.html>

`meson.build`

```meson
project('tutorial', 'c')
executable('demo', 'main.c')
```

```shell
$ meson setup builddir
```

**build**

```shell
$ cd builddir/
$ ninja
```

meson version > 0.55.0

```shell
$ cd builddir/
$ meson compile
```


**execute**

```shell
$ ./demo
```
