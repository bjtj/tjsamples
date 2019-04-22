'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: process.env.MYSQL_PASSWD || 'secret',
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) {
	throw err;
    }
});

module.exports = connection;
