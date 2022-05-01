var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {

  if (error0) {
    console.error(error0);
    return;
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      console.error(error1);
      return;
    }

    var queue = 'hello';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);

    setTimeout(function() {
      connection.close();
      process.exit(0);
    }, 500);
  });
});



