require('dotenv').config();
const myvalue = process.env.MYVALUE || 'default-myvalue';
console.log(`MYVALUE: ${myvalue}`);
