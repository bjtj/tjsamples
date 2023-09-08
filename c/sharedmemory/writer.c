#include "shm.h"

/* std */
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#define BUF_SIZE 256

#if IS_WINDOWS == 1

/*
  TCHAR szName[] = TEXT("Global\\MyFileMappingObject");
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  System Error 0x5: CreateFileMapping()
  -- I deleted the prefix "Global\\" from the name of my mapping object ...
*/
TCHAR szName[] = TEXT("MyFileMappingObject");
TCHAR szMsg[] = TEXT("Message from first process.");
#define MSG_SIZE (_tcslen(szMsg) * sizeof(TCHAR))

#else

const char szName[] = "MyFileMappingObject";
const char szMsg[] = "Message from first process.";
#define MSG_SIZE strlen(szMsg)

#endif


static int task(void);

int main(int argc, char *argv[])
{
  return task();
}


int task(void)
{
  unlink_shm(szName);
  SHM_ID handle = create_shm(szName, BUF_SIZE);
  if (!VALID_SEM_ID(handle)) {
    fprintf(stderr, "create_shm failed\n");
    return 1;
  }
  
  char * buf = map_shm(handle, BUF_SIZE);
  if (!buf) {
    fprintf(stderr, "map_shm failed\n");
    close_shm(handle);
    return 1;
  }
  copy_shm(handle, buf, szMsg, MSG_SIZE);

  getchar();

  unmap_shm(buf, BUF_SIZE);
  unlink_shm(szName);
  close_shm(handle);

  printf("Writer - DONE\n");

  return 0;
}

