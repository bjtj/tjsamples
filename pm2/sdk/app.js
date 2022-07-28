const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const MYMSG = process.env.MYMSG || 'nomymsg';

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  console.log(` - MYMSG: ${MYMSG}`);
  console.log(` - ${process.argv}`);
});

