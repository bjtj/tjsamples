import os
import struct
import binascii


def main():
    # binascii -- https://stackoverflow.com/a/17093845/5676460
    print(binascii.hexlify(struct.pack('!I', 10)))
    print(struct.unpack('!I', struct.pack('!I', 10)))


if __name__ == '__main__':
    main()
