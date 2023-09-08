#include "shm.h"

/* std */
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#define BUF_SIZE 256

#if IS_WINDOWS == 1

#pragma comment(lib, "kernel32.lib")
#pragma comment(lib, "user32.lib")

/*
  TCHAR szName[] = TEXT("Global\\MyFileMappingObject");
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  System Error 0x5: CreateFileMapping()
  -- I deleted the prefix "Global\\" from the name of my mapping object ...
*/
TCHAR szName[] = TEXT("MyFileMappingObject");

#else

const char szName[] = "MyFileMappingObject";

#endif

static int task(void);

int main(int argc, char *argv[])
{
  return task();
}

int task(void)
{
  char data[BUF_SIZE];
  char * buf;
  
  SHM_ID handle = open_shm(szName);
  if (!handle) {
    fprintf(stderr, "open_shm failed\n");
    return 1;
  }
  
  buf = map_shm(handle, BUF_SIZE);
  if (!buf) {
    fprintf(stderr, "map_shm failed\n");
    close_shm(handle);
    return 1;
  }

  printf("buf: %.*s\n", 10, buf);

  unmap_shm(buf, BUF_SIZE);
  close_shm(handle);

  printf("Writer - DONE\n");

  return 0;
}


