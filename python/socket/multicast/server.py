import os
import socket
import struct


mcast_group = '239.255.255.250'
mcast_port = 1900

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind(('', mcast_port))

mreq = struct.pack('4sl', socket.inet_aton(mcast_group), socket.INADDR_ANY)
server.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)

while True:
    print('RECV: {}'.format(server.recv(1024)))
