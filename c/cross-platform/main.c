#if defined(__APPLE__) || defined(__MACH__) /* mac os x */

#  define OSNAME "apple"
#include <unistd.h>

#elif defined(unix) || defined(__unix__) || defined(__unix) /* unix or linux */

#  define OSNAME "unix"
#include <unistd.h>

#elif defined(_WIN32) || defined(_WIN64) /* windows */

#  define OSNAME "windows"

#else

#  define OSNAME "unknown"

#endif

#include <stdlib.h>
#include <stdio.h>

int main(int argc, char *argv[])
{

  printf("osname: %s\n", OSNAME);
  
  return 0;
}
