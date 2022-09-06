const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Server is listening on ${port}`);
});
