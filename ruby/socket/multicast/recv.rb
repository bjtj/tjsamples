require 'socket'
require 'ipaddr'

MULTICAST_ADDR = '239.255.255.250'
BIND_ADDR = '0.0.0.0'
PORT = 1900


socket = UDPSocket.new
membership = IPAddr.new(MULTICAST_ADDR).hton + IPAddr.new(BIND_ADDR).hton
socket.setsockopt(:IPPROTO_IP, :IP_ADD_MEMBERSHIP, membership)
socket.setsockopt(:SOL_SOCKET, :SO_REUSEADDR, 1)
socket.setsockopt(:SOL_SOCKET, :SO_REUSEPORT, 1)
socket.bind(BIND_ADDR, PORT)

fds = [socket]

loop do
  if ios = select(fds, [], [], 1)
    msg, _ = socket.recvfrom(1024)
    puts msg
  end
end
