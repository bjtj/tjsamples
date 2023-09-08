from multiprocessing.shared_memory import SharedMemory

def main():
    shm = SharedMemory('MyFileMappingObject', size=256)
    
    print(shm.buf)              # <memory at 0x000001E1C090CDC0>
    print(len(shm.buf))
    bytes = shm.buf.tobytes()
    ba = bytearray()
    for b in bytes:
        if b == 0:
            break
        ba.append(b)

    print(ba.decode('utf-8'))
    
    shm.close()

if __name__ == '__main__':
    main()
