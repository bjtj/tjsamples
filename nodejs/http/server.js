// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

function mimetype(ext) {
  if (ext === 'ico') {
    return 'image/x-icon';
  }
  return 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else {
    let filename = path.join('public', req.url);
    let ext = path.extname(filename).slice(1);
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': mimetype(ext) });
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${server.address().port}/`);
});
