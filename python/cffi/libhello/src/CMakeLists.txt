add_library(hello SHARED hello.c)
target_include_directories(hello PRIVATE .)
install(TARGETS hello DESTINATION lib)
install(FILES hello.h DESTINATION include)
