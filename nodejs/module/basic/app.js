// exports
const circle = require('./circle.js');
console.log(`area 4: ${circle.area(4)}`);
console.log(`circumference 4: ${circle.circumference(4)}`);


// module.exports
const value = require('./primitive');
console.log(value);


// module.exports -- function
const add = require('./foo');
const result = add(1, 2);
console.log(result);


// module.exports -- object
const calc = require('./foo2');
const result1 = calc.add(1, 2);
console.log(result1);
const result2 = calc.minus(1, 2);
console.log(result2);


// require -- directory
const myModule = require('./module');
const ret = myModule.calc.add(1, 2);
console.log(ret);
myModule.print.sayHello();


// require -- core module
const http = require('http');
