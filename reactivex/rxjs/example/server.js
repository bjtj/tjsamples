require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
});
