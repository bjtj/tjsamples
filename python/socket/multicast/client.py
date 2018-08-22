import socket


mcast_group = '239.255.255.250'
mcast_port = 1900

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
client.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, 2)
client.sendto('hello'.encode(), (mcast_group, mcast_port))
