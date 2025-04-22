// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
// unix timestamp
// ----
// 1970년 1월 1일 UTC

var date = new Date();
console.log(date);
console.log(date.getTime());

var now = Date.now();
console.log(now);

var seconds = Math.floor(Date.now() / 1000);
console.log(seconds);

console.log('5'.padStart(2, '0'));
console.log('12'.padStart(2, '0'));
