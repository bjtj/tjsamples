require('dotenv').config();
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { createWriteStream } = require("node:fs");
const { Readable } = require("node:stream");

const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_REGION = process.env.AWS_REGION;

const client = new S3Client({
  credentials: {
    accessKeyId: AWS_ACCESS_ID,
    secretAccessKey: AWS_SECRET_KEY,
  },
  region: AWS_REGION
});

(async () => {
  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET,
    Key: process.env.OBJECT_KEY,
  });
  const response = await client.send(command);
  console.log(response);

  await new Promise((resolve, reject) => {
    const body = response.Body;
    if (body instanceof Readable) {
      const writeStream = createWriteStream('./output');
      body
        .pipe(writeStream)
        .on("error", (err) => reject(err))
        .on("close", () => {
          console.log('FILE WRITE -- DONE');
          resolve(null);
        });
    }
  });

  console.log('DONE.');
})();
