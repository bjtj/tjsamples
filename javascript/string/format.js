// replace regex (match & group)
// ====
// https://stackoverflow.com/a/1234725


// Simple String.format() in javascript
// ====
// https://coderwall.com/p/flonoa/simple-string-format-in-javascript


var assert = require('assert');

function format(fmt, ...args) {
  return fmt.replace(/\${([0-9]+)}/g, (match, group) => (args[parseInt(group)] || match));
}

let a = format('${0} ${1} ${0}', 'a', 'b');
console.log('a:', a);
a = format('${0} ${1} ${0}', 'a')
console.log('a:', a);

