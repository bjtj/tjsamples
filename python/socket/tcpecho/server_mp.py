import os
import socket
from multiprocessing.dummy import Pool as ThreadPool


def handler(remote, remote_addr):
    print('handler - {}'.format(remote_addr))
    data = remote.recv(1024)
    remote.send(data)
    remote.close()


def main():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind(('127.0.0.1', 5000))
    server.listen(5)

    pool = ThreadPool(5)

    while True:
        remote, remote_addr = server.accept()
        pool.apply_async(handler, (remote, remote_addr))

    pool.close()
    pool.join()
    server.close()
    

if __name__ == '__main__':
    main()
