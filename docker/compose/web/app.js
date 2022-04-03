const express = require('express');
const { createClient } = require('redis');
var app = express();

var conn = null;

(async () => {
    const client = createClient({
	url: 'redis://redis:6379'
    });
    client.on('error', (err) => console.log('Redis client error', err));
    await client.connect();
    conn = client;
})();


app.get('/', async (req, res) => {
    if (conn) {
	let count = await conn.incr('hits');
	res.send(`Count: ${count}`);
	return;
    }
    res.send('No redis connection...');
});


app.listen(3000);
