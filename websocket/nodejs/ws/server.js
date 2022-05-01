const ws = require('ws');

const WebSocketServer = ws.WebSocketServer;

var server = new WebSocketServer({
  port: 8000
});

server.on('connection', function(ws) {
  console.log('client connected');
  ws.on('message', function(message) {
    console.log(message);
  });
});
