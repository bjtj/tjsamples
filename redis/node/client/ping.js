const { createClient } = require('redis');

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

(async () => {

  const client = createClient({
    url: REDIS_URL,
  });

  client.on('error', err => {
    console.log('Redis Client Error', err);
    process.exit(1);
  })
    .connect();

  let ret = await client.ping();
  console.log(`RESPONSE: ${ret}`);

  await client.disconnect();

})();
