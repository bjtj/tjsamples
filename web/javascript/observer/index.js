require('dotenv').config({path: '.env'});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');


app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`server is listening on ${port}...`);
});
