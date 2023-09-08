#ifndef __OS_H__
#define __OS_H__

#if defined(_WIN32) || defined(_WIN64) /* windows */

#  define OSNAME "windows"
#  define IS_WINDOWS 1

#else

#  define OSNAME "non-windows"
#  define IS_WINDOWS 0

#endif

#endif /* __OS_H__ */
