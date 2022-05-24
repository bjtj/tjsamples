const express = require('express');
const msgpackResponse = require('msgpack-response');

const app = express();

app.use(msgpackResponse({auto_detect: true}));

app.get('/test_json', (req, res) => {
  res.status(200).json({'message': 'a true test'});
})

app.listen(5000, () => {
  console.log(`Server listening on 5000`);
});
