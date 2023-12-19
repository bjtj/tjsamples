const express = require('express');
const app = express();

const PORT = process.env.PORT || 0;

app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
