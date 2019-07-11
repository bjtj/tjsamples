// https://api.dartlang.org/stable/2.4.0/dart-io/File-class.html

import 'dart:io';

main(List<String> args) {
  var out = new File('out.txt');

  out.writeAsString('some content')
  .then((File file) {
      print('write done');
      out.readAsString().then((String contents) {
          print(contents);
          out.deleteSync();
      });
  });


  new Directory('a/b').create(recursive: true)
  .then((Directory directory) {
      print(directory.path);
      print(directory.parent);
      directory.parent.list().toList().then((list) {
          print(list);
          directory.parent.deleteSync(recursive: true);
      });
  });
}
