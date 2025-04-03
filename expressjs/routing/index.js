import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<html><body>INDEX</body></html>');
});


// WILDCARD
// ----

// v4
// app.use('/abc*', (req, res) => { ... }

// v5 - https://expressjs.com/en/guide/migrating-5.html#path-syntax
app.use('/abc*all', (req, res) => {
  res.send(`<div>/abc*all - ${JSON.stringify(req.params.all)}</div>`);
});

app.use('/abc/*all', (req, res) => {
  // UNREACHABLE
  res.send(`<div>/abc/*all - ${JSON.stringify(req.params.all)}</div>`);
});

app.listen(3000);
