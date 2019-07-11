// http://jamesslocum.com/post/77759061182
import 'dart:io';

String msearchPacket(String st, int mx) {
  return 'M-SEARCH * HTTP/1.1\r\n' +
  'HOST: 239.255.255.250:1900\r\n' +
  'MAN: "ssdp:discover"\r\n' +
  'MX: $mx\r\n' +
  'ST: $st\r\n' +
  '\r\n';
}

main(List<String> args) {
  RawDatagramSocket.bind(InternetAddress.ANY_IP_V4, 0).then((RawDatagramSocket socket) {

      // send m-search
      socket.send(msearchPacket('ssdp:all', 3).codeUnits,
        new InternetAddress('239.255.255.250'), 1900);

      // listen
      socket.listen((RawSocketEvent e) {
          Datagram d = socket.receive();
          if (d == null) return;
          print(new String.fromCharCodes(d.data).trim());
      });
  });
}
