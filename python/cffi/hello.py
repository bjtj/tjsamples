from cffi import FFI

def main():
    ffi = FFI()
    ffi.cdef("""
void hello(void);
""")
    lib = ffi.dlopen("libhello/build/src/libhello.so")
    lib.hello()
    

if __name__ == '__main__':
    main()
