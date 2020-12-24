include_directories(${PROJECT_SOURCE_DIR}/src)

add_executable(Test test.c)
target_link_libraries(Test hello)


