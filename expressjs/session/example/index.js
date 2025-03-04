var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    if (!req.session.views) {
	req.session.views = {};
    }
    var pathname = parseurl(req).pathname;
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next();
});

app.get('/foo', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/foo'] + ' times');
});

app.get('/bar', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/bar'] + ' times');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
