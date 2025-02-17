let dotenv = require('dotenv');
let express = require('express');

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;

let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { client_id: CLIENT_ID, api_key: API_KEY });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

