cmake_minimum_required(VERSION 3.5)
project(hello)

enable_language(C)
enable_language(CXX)

# Check for CppUTest and bail out if they don't have it
if(DEFINED ENV{CPPUTEST_HOME})
  message("Using CppUTest found in $ENV{CPPUTEST_HOME}")
else()
  message("CPPUTEST_HOME is not set; You must tell CMake where to find CppUTest")
  return()
endif()

add_library(hello src/hello.c)

add_subdirectory(tests)
