#include <stdlib.h>
#include <stdio.h>

#if defined(_WIN32) || defined(_WIN64) /* windows */

#	include <Windows.h>

typedef HMODULE lib_handle;
typedef FARPROC lib_symbol;

#else

#  include <dlfcn.h>

typedef void * lib_handle;
typedef void * lib_symbol;

#endif

static lib_handle s_lib_load(const char *);
static void s_lib_close(lib_handle);
static lib_symbol s_lib_get_symbol(lib_handle, const char *);


#if defined(_WIN32) || defined(_WIN64) /* windows */
const char * libpath = "./hello.dll";
#else
const char * libpath = "./libhello.so";
#endif


int main(int argc, char *argv[])
{
  lib_handle handle;
  lib_symbol func;

  handle = s_lib_load(libpath);
  printf("libpath: %s\n", libpath);

  func = s_lib_get_symbol(handle, "hello");
  if (!func) {
    s_lib_close(handle);
    exit(1);
  }
  ((void (*)())func)();

  s_lib_close(handle);

  printf("Done.\n");
  return 0;
}


lib_handle s_lib_load(const char * filename)
{
  lib_handle handle;
#if defined(_WIN32) || defined(_WIN64) /* windows */
  handle = LoadLibrary(filename);
  if (!handle) {
    fprintf(stderr, "LoadLibrary() failed\n");
    return NULL;
  }
  return handle;
#else
  handle = dlopen(filename, RTLD_LAZY);
  if (handle == NULL) {
    fprintf(stderr, "Failed: dlopen() - %s\n", dlerror());
    return NULL;
  }
  dlerror();
  return handle;
#endif
}

void s_lib_close(lib_handle handle)
{
#if defined(_WIN32) || defined(_WIN64) /* windows */
  if (handle) {
    FreeLibrary(handle);
  }
#else
  if (handle) {
    dlclose(handle);
  }
#endif
}

lib_symbol s_lib_get_symbol(lib_handle handle, const char * sym)
{
#if defined(_WIN32) || defined(_WIN64) /* windows */
  lib_symbol ret = GetProcAddress(handle, sym);
  if (!ret)
  {
    fprintf(stderr, "GetProcAddress() failed\n");
    return NULL;
  }
  return ret;
#else
  lib_symbol ret = dlsym(handle, sym);
  if (!ret)
  {
    fprintf(stderr, "dlsym() failed\n");
    return NULL;
  }
  return ret;
#endif
}
