require('dotenv').config();
const express = require('express');
var mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  const data = {
    clientid: process.env.CLIENT_ID,
    apikey: process.env.API_KEY
  };
  res.render('index', data);
});

app.listen(8080, () => {
  console.log('server listening on 8080');
});

