import 'dart:io';

main(List<String> args) {
  InternetAddress multicastAddress = new InternetAddress('239.255.255.250');
  int multicastPort = 1900;

  RawDatagramSocket.bind(InternetAddress.ANY_IP_V4, multicastPort)
  .then((RawDatagramSocket socket) {
      socket.joinMulticast(multicastAddress);
      socket.listen((RawSocketEvent e) {
          Datagram d = socket.receive();
          if (d == null) return;
          String message = new String.fromCharCodes(d.data).trim();
          print(message);
      });
  });
}
