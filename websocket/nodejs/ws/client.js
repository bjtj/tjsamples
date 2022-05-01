const ws = require('ws');

const sock = new ws.WebSocket('ws://localhost:8000/core');

sock.on('open', function open() {
  const array = new Float32Array(5);

  for (var i = 0; i < array.length; ++i) {
    array[i] = i / 2;
  }

  sock.send(array);
  sock.close();
});
