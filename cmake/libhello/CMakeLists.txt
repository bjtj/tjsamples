cmake_minimum_required(VERSION 3.5)
project(hello)

# pkgconfig
set(DEST_DIR "${CMAKE_INSTALL_PREFIX}")
set(PRIVATE_LIBS "-lhello")
configure_file(hello.pc.in hello.pc @ONLY)
install(FILES "${CMAKE_CURRENT_BINARY_DIR}/hello.pc" DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig")

# libhello
include_directories(${CMAKE_CURRENT_SOURCE_DIR})
add_library(hello SHARED hello.c)
target_include_directories(hello PRIVATE .)
install(TARGETS hello DESTINATION lib)
install(FILES hello.h DESTINATION include)

