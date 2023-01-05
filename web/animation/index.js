require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = new express();


app.use(express.static(__dirname + '/public'));


app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`);
});
