cmake_minimum_required(VERSION 3.5)
project (example)
add_executable (example main.c)
find_package(PkgConfig REQUIRED)
pkg_check_modules(PKG_HELLO REQUIRED hello)
include_directories(${PKG_HELLO_INCLUDE_DIRS})
target_link_libraries(example ${PKG_HELLO_LDFLAGS})

