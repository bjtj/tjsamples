import os
import struct
import binascii


def main():
    # binascii -- https://stackoverflow.com/a/17093845/5676460
    print(binascii.hexlify(struct.pack('!I', 10)))
    print(struct.unpack('!I', struct.pack('!I', 10)))


    a = b'123'
    print(a)
    b = b'456'
    print(b)
    print(a+b)

    print(len(bytes(1)))

if __name__ == '__main__':
    main()
