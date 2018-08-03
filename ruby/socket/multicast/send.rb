require 'socket'

MULTICAST_ADDR = '239.255.255.250'
PORT = 1900

socket = UDPSocket.new
socket.setsockopt(:IPPROTO_IP, :IP_MULTICAST_TTL, 1)

payload = "M-SEARCH * HTTP/1.1\r\n" \
          "HOST: #{MULTICAST_ADDR}:#{PORT}\r\n" \
          "MAN: \"ssdp:discover\"\r\n" \
          "MX: 3\r\n" \
          "ST: ssdp:all\r\n" \
          "\r\n"

socket.send(payload, 0, MULTICAST_ADDR, PORT)

loop do
  msg, _ = socket.recvfrom(1024)
  puts "RECV: #{msg}"
end

socket.close
