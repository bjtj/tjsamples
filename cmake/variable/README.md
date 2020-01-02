# [CMake] How to export the user-defined variable in to the parent directory? #

https://cmake.org/pipermail/cmake/2012-July/051337.html

```
set(foo "abc" CACHE STRING "something..." FORCE)
```

or using a GLOBAL property:

in dir1/dir2/dir3/:

```
set_property(GLOBAL .... )
```

# How do I list cmake user-definable variables? #

https://stackoverflow.com/a/44009022

```
cmake -LH .
```

or

```
mkdir build
cd build
cmake -LH ..
```
