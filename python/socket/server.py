import socket


def main():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(('0', 5000))
    sock.listen(5)
    remote, remote_addr = sock.accept()
    print('Connected: {}:{}'.format(*remote_addr))
    data = remote.recv(5)
    print('RECV: {}'.format(data))
    pack = bytearray()
    pack.extend('hi')
    print('SEND: {}'.format(pack))
    remote.send(pack)
    remote.close()
    sock.close()

if __name__ == '__main__':
    main()
