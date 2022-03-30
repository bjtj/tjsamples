const net = require('net');

const server = net.createServer((socket) => {
    socket.end('goodbye\n');
}).on('error', (err) => {
    throw err;
});


server.listen(() => {
    console.log(`opened server on ${JSON.stringify(server.address())}`);
});
