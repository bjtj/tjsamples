from ctypes import *
import sys


def main():
    if sys.platform == 'win32':
        libpath = './hello.dll'
    else:
        libpath = './libhello.so'
    
    dll = cdll.LoadLibrary(libpath)
    dll.hello()


if __name__ == '__main__':
    main()
