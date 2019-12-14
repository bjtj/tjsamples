# LLVM #

https://llvm.org/


# Static and Dynamic Libraries #

http://nickdesaulniers.github.io/blog/2016/11/20/static-and-dynamic-libraries/

static

```
clang -c x.c y.c
```

shared

```
clang -shared -fpic x.c y.c -o libhello.dylib
```
