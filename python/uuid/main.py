# https://docs.python.org/2/library/uuid.html

import uuid


def main():
    print(uuid.uuid1())
    print(uuid.uuid3(uuid.NAMESPACE_DNS, 'python.org'))
    print(uuid.uuid4())
    print(uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org'))
    val = uuid.UUID('{00010203-0405-0607-0809-0a0b0c0d0e0f}')
    print(val)
    print(val.hex)
    print(val.urn)
    print(uuid.UUID(bytes=val.bytes))

    # MAC Address
    # https://stackoverflow.com/a/159195/5676460
    print('Node: {:012x}'.format(uuid.getnode()))
    

if __name__ == '__main__':
    main()
