#include "shm.h"

#include <stdio.h>

#if IS_WINDOWS

SHM_ID create_shm(TCHAR * name, DWORD bufsize)
{
  SHM_ID hMapFile;

  hMapFile = CreateFileMapping(
    INVALID_HANDLE_VALUE,    // use paging file
    NULL,                    // default security
    PAGE_READWRITE,          // read/write access
    0,                       // maximum object size (high-order DWORD)
    bufsize,                 // maximum object size (low-order DWORD)
    name);                   // name of mapping object

  if (hMapFile == NULL)
  {
    _tprintf(TEXT("Could not create file mapping object (%d).\n"), GetLastError());
    return NULL;
  }

  return hMapFile;
}


SHM_ID open_shm(TCHAR * szName)
{
  SHM_ID hMapFile;

  hMapFile = OpenFileMapping(
    FILE_MAP_ALL_ACCESS, // read/write access
    FALSE,               // do not inherit the name
    szName);             // name of mapping object

  if (hMapFile == NULL)
  {
    _tprintf(TEXT("Could not open file mapping object (%d).\n"), GetLastError());
    return NULL;
  }

  return hMapFile;
}


LPCTSTR map_shm(SHM_ID handle, DWORD bufsize)
{
  LPCTSTR pBuf;
  pBuf = (LPTSTR)MapViewOfFile(handle,   // handle to map object
                               FILE_MAP_ALL_ACCESS, // read/write permission
                               0,
                               0,
                               bufsize);

  if (pBuf == NULL)
  {
    _tprintf(TEXT("Could not map view of file (%d).\n"), GetLastError());
    return NULL;
  }
  
  return pBuf;
}


void unmap_shm(LPCTSTR buf, size_t bufsize)
{
  (void)bufsize;
  UnmapViewOfFile(buf);
}


void copy_shm(SHM_ID handle, LPCTSTR buf, char * str, DWORD size)
{
  CopyMemory((PVOID)buf, str, size);
}


void unlink_shm(const char * x)
{
  (void)x;
}


void close_shm(SHM_ID handle)
{
  CloseHandle(handle);
}


#else


int create_shm(const char * name, size_t bufsize)
{
  int fd;
  int ret;

  fd = shm_open(name, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
  if (fd == -1) {
    perror("shm_open failed");
    return -1;
  }

  ret = ftruncate(fd, bufsize);
  if (ret == -1) {
    perror("ftruncate failed");
    return -1;
  }

  return fd;
}


int open_shm(const char * szName)
{
  int fd;

  fd = shm_open(szName, O_RDWR, S_IRUSR | S_IWUSR);
  if (fd == -1) {
    perror("shm_open failed");
    return -1;
  }
  
  return fd;
}


char * map_shm(int fd, size_t size)
{
  char * addr;
  addr = mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
  if (addr == MAP_FAILED) {
    perror("mmap failed");
    return NULL;
  }
  return addr;
}


void unmap_shm(char * addr, size_t size)
{
  int ret;
  ret = munmap(addr, size);
  if (ret == -1) {
    perror("munmap failed");
  }
}


void copy_shm(SHM_ID fd, char * buf, const char * data, size_t size)
{
  (void)fd;
  memcpy(buf, data, size);
}


void unlink_shm(const char * name)
{
  int fd;
  fd = shm_unlink(name);
  if (fd == -1) {
    perror("shm_unlink failed");
  }
}


void close_shm(int fd)
{
  close(fd);
}


#endif
