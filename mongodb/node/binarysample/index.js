const express = require('express');
const app = new express();
const multer = require('multer');
const upload = multer({});
const { MongoClient, Binary, ObjectID } = require("mongodb");

const uri = "mongodb://localhost:27017";
const port = process.env.PORT || 5000;
let client;
let collection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.post('/upload', upload.single('file'), async (req, res) => {
  let file = req.file;

  collection.insertOne({
    name: file.originalname,
    data: Binary(file.buffer),
    type: file.mimetype,
  })
    .then(res => {
      res.json({ result: 'ok', response: res });
    })
    .catch(err => {
      res.status(500).json({ result: 'error', error: `${err}` });
    });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);

  (async () => {
    client = new MongoClient(uri);
    await client.connect();
    collection = await client.db("mydb").collection("images");
    console.log('Mongodb is connected');
  })();

});
