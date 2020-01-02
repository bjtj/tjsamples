project (variable)
add_executable (prog main.c)

set(foo "abc" CACHE STRING "something..." FORCE)

set(depends "..." CACHE FILEPATH "xxx")
