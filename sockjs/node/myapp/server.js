const http = require('http');
const sockjs = require('sockjs');
const connect = require('connect');
const serveStatic = require('serve-static');

const echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', function(conn) {
  conn.on('data', function(message) {
    conn.write(message);
  });
  conn.on('close', function() { });
});

const app = connect();
app.use(serveStatic(__dirname));

const server = http.createServer(app);
echo.installHandlers(server, { prefix: '/echo' });
server.listen(9999, '0.0.0.0');
