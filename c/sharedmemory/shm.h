#ifndef __SHM_H__
#define __SHM_H__

#include "os.h"

#if IS_WINDOWS == 1

#  include <windows.h>
#  include <conio.h>
#  include <tchar.h>

#define SHM_ID HANDLE

#define VALID_SEM_ID(id) (id != NULL)

extern SHM_ID create_shm(TCHAR *, DWORD);
extern SHM_ID open_shm(TCHAR *);
extern LPCTSTR map_shm(SHM_ID, DWORD);
extern void copy_shm(SHM_ID, LPCTSTR, char *, DWORD);
extern void unmap_shm(LPCTSTR, size_t);
extern void unlink_shm(const char *);
extern void close_shm(SHM_ID);

#else

#  include <unistd.h>
#  include <stdlib.h>
#  include <string.h>
#  include <sys/mman.h>
#  include <sys/stat.h>        /* For mode constants */
#  include <fcntl.h>           /* For O_* constants */

#define SHM_ID int

#define VALID_SEM_ID(id) (id >= 0)

extern SHM_ID create_shm(const char *, size_t);
extern SHM_ID open_shm(const char *);
extern char * map_shm(SHM_ID, size_t);
extern void unmap_shm(char *, size_t);
extern void copy_shm(SHM_ID, char *, const char *, size_t);
extern void unlink_shm(const char *);
extern void close_shm(SHM_ID);



#endif


#endif /* __SHM_H__ */
