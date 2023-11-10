#ifndef __HELLO_H__
#define __HELLO_H__

#if defined(_WIN32) || defined(_WIN64) /* windows */

#  define EXPORT __declspec(dllexport)

#else

#  define EXPORT

#endif

#ifdef __cplusplus
extern "C" {
#endif

  EXPORT void hello(void);

#ifdef __cplusplus
}
#endif

#endif
