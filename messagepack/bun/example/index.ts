import msgpacklite from 'msgpack-lite';

let buffer = msgpacklite.encode({ foo: 'bar' });
console.log(buffer); // Buffer(9) [ 129, 163, 102, 111, 111, 163, 98, 97, 114 ]
let ret = msgpacklite.decode(buffer); // { foo: 'bar' }
console.log(ret);
console.log(JSON.stringify(ret));
console.log(JSON.stringify(ret).length);
