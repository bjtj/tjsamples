import socket


def main():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(3)
    sock.connect(('0', 5000))
    pack = bytearray()
    pack.extend('hello')
    print('SEND: {}'.format(pack))
    sock.send(pack)
    data = sock.recv(100)
    print('RECV: {}'.format(data))
    sock.close()

if __name__ == '__main__':
    main()
