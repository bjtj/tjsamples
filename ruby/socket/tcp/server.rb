require 'socket'

socket = TCPServer.new 5000

remote = socket.accept
data = remote.recv(10)
puts "RECV: #{data}"

remote.puts 'hi'

remote.close
socket.close
