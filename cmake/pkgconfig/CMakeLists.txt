cmake_minimum_required(VERSION 3.5)
project(hello)

find_package(PkgConfig REQUIRED)
pkg_check_modules(LIBXML2 REQUIRED IMPORTED_TARGET libxml-2.0)

add_executable(hello src/main.c)
target_link_libraries(hello PkgConfig::LIBXML2)
