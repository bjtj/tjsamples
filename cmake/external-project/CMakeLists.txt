cmake_minimum_required(VERSION 3.10)  # or 3.10, see below

project(extproj VERSION 1.0.0)

find_package(Threads REQUIRED)

add_executable(hello
    main.c
)

include(ExternalProject)
ExternalProject_Add(oslc
  GIT_REPOSITORY    https://github.com/bjtj/osl-c.git
  GIT_TAG           1.0.0
  EXCLUDE_FROM_ALL  TRUE
  BUILD_COMMAND     cmake --build .
  STEP_TARGETS      build
)

set(oslc_BINARY_DIR "${CMAKE_BINARY_DIR}/oslc-prefix/src/oslc-build")
set(oslc_SOURCE_DIR "${CMAKE_BINARY_DIR}/oslc-prefix/src/oslc/src")
add_dependencies(hello oslc-build)

if(UNIX AND NOT APPLE)
  target_link_libraries(hello ${oslc_BINARY_DIR}/libosl.so)
endif()

if(MSVC)
  target_link_libraries(hello ${oslc_BINARY_DIR}/Debug/osl.lib)
  add_custom_command(TARGET hello POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_if_different
      "${oslc_BINARY_DIR}/Debug/osl.dll"
      $<TARGET_FILE_DIR:hello>)
endif()

target_include_directories(hello PUBLIC ${oslc_SOURCE_DIR})

target_link_libraries(hello ${CMAKE_THREAD_LIBS_INIT} ${CMAKE_DL_LIBS})
