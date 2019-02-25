var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/hello', function(req, res) {
    res.send('Hello world');
});

app.get('/pug', function(req, res) {
    res.render('template', {
	name: 'Timothy'
    });
});

app.listen(8080, function(err) {
    console.log("listen 8080...");
});
