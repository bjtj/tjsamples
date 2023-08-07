const { createClient } = require('redis');

(async () => {
  const client = createClient();
  const subscriber = client.duplicate();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  await subscriber.connect();

  subscriber.subscribe('mytest', (msg) => {
    console.log(`[SUB] message - ${msg}`);
  });

  await client.set('key', 'value');
  const value = await client.get('key');

  console.log(`value of key: ${value}`);

  client.publish('mytest', 'hello');

  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  client.disconnect();

  console.log('DONE.');
  process.exit(0);
})();
