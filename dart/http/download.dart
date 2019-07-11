// https://stackoverflow.com/a/18044164/5676460
// https://stackoverflow.com/a/18044164/5676460


import 'dart:io';
import 'dart:convert';

main(List<String> args) {
  var httpClient = new HttpClient();
  httpClient.getUrl(Uri.parse('http://example.com'))
  .then((HttpClientRequest request) => request.close())
  .then((HttpClientResponse response) {
      response.transform(utf8.decoder).toList().then((data) {
          var body = data.join('');
          print(body);
          var file = new File('index.html');
          print('Write to `index.html`');
          file.writeAsString(body).then((_) {
              print('Done');
              httpClient.close();
          });
      });
  });
}
