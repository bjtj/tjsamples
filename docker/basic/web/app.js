const os = require('os');
const express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;


app.get('/', async (req, res) => {
    res.send(`Hello from '${os.hostname()}' (REQUEST -- HOSTNAME: ${req.hostname}, REMOTE IP: ${req.ip})`);
});

app.get('/process/argv', async (req, res) => {
    res.contentType('application/json').send(process.argv);
});


app.get('/system/env', async (req, res) => {
    res.contentType('application/json').send(process.env);
});


app.get('/system/hostname', async (req, res) => {
    res.contentType('application/json').send({ hostname: os.hostname() });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on '${PORT}'`);
});
