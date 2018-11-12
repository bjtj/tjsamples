// https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
console.log(process.env);


console.log("HOME: " + process.env.HOME);


const port = process.env.PORT || 3000;
console.log("PORT: " + port);

// e.g.)
// $ node main.js
// PORT: 3000
// $ PORT=100 node main.js
// PORT: 100
