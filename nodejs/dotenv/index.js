require('dotenv').config()
console.log(`MYVALUE: ${process.env.MYVALUE || 'my-default'}`)
