cmake_minimum_required(VERSION 3.5)
project(hello)

# 
add_subdirectory(src)
add_subdirectory(test)
enable_testing()
add_test(NAME mytest COMMAND Test)

# pkgconfig
set(DEST_DIR "${CMAKE_INSTALL_PREFIX}")
set(PRIVATE_LIBS "-lhello")
configure_file(hello.pc.in hello.pc @ONLY)
install(FILES "${CMAKE_CURRENT_BINARY_DIR}/hello.pc" DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig")
