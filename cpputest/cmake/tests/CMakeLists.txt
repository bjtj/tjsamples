project (hello)

include_directories(${PROJECT_SOURCE_DIR}/../src)

# include CppUTest headers
include_directories($ENV{CPPUTEST_HOME}/include)

# add cpputest library
add_library(imp_cpputest STATIC IMPORTED)
set_property(TARGET imp_cpputest PROPERTY
             IMPORTED_LOCATION $ENV{CPPUTEST_HOME}/lib/libCppUTest.a)

add_library(HelloTest ./hello/HelloTest.cpp)

add_executable(RunAllTests RunAllTests.cpp)
target_link_libraries(RunAllTests HelloTest hello imp_cpputest)
