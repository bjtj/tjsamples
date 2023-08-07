const { createClient, commandOptions } = require("redis");

(async () => {
  const client = createClient();

  client.on("error", (err) => {
    console.error("Redis Client Error", err);
    process.exit(1);
  });

  await client.connect();

  let mystream_key = "mystream";

  let tasks = [...new Array(10)].map((_, i) =>
    client.xAdd(mystream_key, "*", { ts: new Date().getTime(), v: i })
  );

  try {
    let addResult = await Promise.all(tasks);
    console.log(`addResult: ${addResult}`);

    let len = await client.xLen(mystream_key);
    console.log(`len: ${len}`);

    let ret = await client.xRead(
      commandOptions({
        isolated: true,
      }),
      { key: mystream_key, id: "0-0" },
      { COUNT: 2 }
    );
    console.log(`xRead result: ${JSON.stringify(ret)}`);

    await consume(client, mystream_key);

    client.del(mystream_key);

    len = await client.xLen(mystream_key);
    console.log(`len after deletion: ${len}`);

  } catch (err) {
    console.error(err);
  }
  
  client.disconnect();

  console.log("DONE.");
  process.exit(0);
})();

async function consume(client, stream) {
  console.log(`consume stream - ${stream}`);

  let last_id = "0-0";

  while (true) {
    let item = await client.xRead(
      { key: stream, id: last_id },
      {
        COUNT: 2,
      }
    );

    if (!item) {
      break;
    }

    item[0].messages.forEach((msg) => {
      last_id = msg.id;
      console.log(`ITEM: ${JSON.stringify(msg)}`);
    });
  }
}
