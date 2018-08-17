require 'socket'

socket = TCPSocket.new '0', 5000

socket.puts 'hello'
data = socket.recv(10)
puts "RECV: #{data}"

socket.close
