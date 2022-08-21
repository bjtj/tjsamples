const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
