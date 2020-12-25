# What is the proper way to use `pkg-config` from `cmake`? #

<https://stackoverflow.com/a/57224542/5676460>

e.g.)

```
find_package(PkgConfig REQUIRED)
pkg_check_modules(LIBXML2 REQUIRED IMPORTED_TARGET libxml-2.0)
target_link_libraries(hello PkgConfig::LIBXML2)
```

# FindPkgConfig #

<https://cmake.org/cmake/help/latest/module/FindPkgConfig.html>

`<XXX>_INCLUDE_DIRS`

* the `-I` preprocessor flags (without the `-I`)

e.g.)

```
include_directories(${CPPUTEST_INCLUDE_DIRS})
```
