
Function incrementor(start) {
  int _fxx() {
    start += 1;
    print(start);
    return start;
  }
  return _fxx;
}

main(List<String> args) {
  var list = ['a', 'b', 'c', 'd'];
  // list.forEach(item => print(item)); // failed
  list.forEach((item) => print(item));

  print(list.map((item) => item.toUpperCase()));

  print(list.reduce((curr, next) => curr + '.' + next));

  print(list.where((item) => item == 'a' || item == 'c').toList());

  var incr = incrementor(0);
  incr();
  incr();
  incr();

  incr = incrementor(10);
  incr();
  incr();
  incr();
}
