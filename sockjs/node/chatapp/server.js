var http = require('http');
var sockjs = require('sockjs');
var { static } = require('./static');

var clients = {};

// Broadcast to all clients
function broadcast(message){
    // iterate through each client in clients object
    for (var client in clients){
      // send the message to that client
      clients[client].write(JSON.stringify(message));
    }
  }

var echo = sockjs.createServer();
echo.on('connection', function(conn) {

    clients[conn.id] = conn;

    conn.on('data', function(message) {
        console.log(message);
        broadcast(JSON.parse(message));
    });
    conn.on('close', function() {
        delete clients[conn.id];
    });
});

var server = http.createServer(static('./public'));
echo.installHandlers(server, {prefix:'/echo'});
server.listen(9999, '0.0.0.0');