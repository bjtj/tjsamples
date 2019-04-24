var express = require('express');
var app = express();
var parser = require('body-parser');
var port = process.env.PORT || 3000;
app.set('views', './views');
app.set('view engine', 'pug');

const mysql = require('mysql')

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWD || 'secret',
    database: 'mydb'
});


mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());


app.get('/', function(req, res) {
    res.render('index');
});

var routes = require('./app/routes/appRoutes');
routes(app);
