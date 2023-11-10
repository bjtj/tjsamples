# HOW TO #

## Linux ##

Build

``` shell
# linux
$ make
```

Run

``` shell
$ LD_LIBRARY_PATH=$PWD ./program
```

## OSX ##

Build

``` shell
# macosx - https://stackoverflow.com/a/14230346/5676460
$ make -f Makefile.macosx
```

Run

``` shell
$ LD_LIBRARY_PATH=$PWD ./program
```

## Windows (MSVC) ##

Open `x64 Native Tools Command Prompt for VS 2022`

``` shell
nmake /f Makefile.nmake
```
