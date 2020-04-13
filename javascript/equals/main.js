

console.log('a' == 'a')		// true
console.log('a' === 'a')	// true

var x = 'a';
var y = 'a';

console.log(x == y)		// true
console.log(x === y)		// true

var u = undefined;

console.log(u == undefined)	// true
console.log(u === undefined)	// true
console.log(u == null)		// true
console.log(u === null)		// false
console.log(u != null)		// false
console.log(u !== null)		// true

var a1 = {
  name: 'a',
}

var a2 = {
  name: 'a',
}

console.log(a1 == a2)		// false
console.log(a1 === a2)		// false

var a1x = a1;

console.log(a1 == a1x)		// true
console.log(a1 === a1x)		// true
