main(List<String> args) {
  var string = 'Dart is fun';
  var newString = string.substring(0, 5);
  print(newString);
  print('Dart ' 'is ' 'fun!');
  print('$string has ${string.length} letters.');

  print(string.toLowerCase());
  print(string.toUpperCase());

  print('a b  c'.split(' '));
  print('a b  c'.split(new RegExp(' +')));

  var str1 = 'a';
  var str2 = 'a';
  print(str1 == str2);
  print(str1 == 'a');
}
