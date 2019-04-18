var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWD || 'secret',
    database: 'mydb'
});

conn.connect();

conn.query('select 1 + 1 as solution', function (err, ret, fields) {
    if (err) throw err;
    console.log('the solution is: ', ret[0].solution);
});

conn.end();
