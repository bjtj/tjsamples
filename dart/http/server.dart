// https://api.dartlang.org/stable/2.4.0/dart-io/HttpServer-class.html

import 'dart:io';

main(List<String> args) {
  const port = 80;
  HttpServer
  .bind(InternetAddress.anyIPv4, port)
  .then((server) {
      server.listen((HttpRequest request) {
          request.response.write('Hello World');
          request.response.close();
      });
  });
}
