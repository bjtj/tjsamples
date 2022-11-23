# Mongodb binary sample #


## How to add binary data with objectId to mongoDB? ##

<https://stackoverflow.com/a/64561587/5676460>

e.g.)

```javascript
const { Binary, ObjectID } = require('mongodb')

async function run() {
  // Configure MongoDB connection
  const client = new MongoClient()

  // Connect to MongoDB
  await client.connect(...)

  try {
    // Insert data using base64 encoded content and 
    // both ObjectID and Binary from mongodb package
    await client.db().mediafiles.chunks.insert({
      _id: ObjectID('57a9be3c89c1e4b50c574e3a'),
      files_id: ObjectID('5113b0062be53b231f9dbc11'),
      n: 0,
      data: Binary(Buffer.from('/9j/4AAQSkZJRgA...and...so...on../2Q==', 'base64')),
    })
  } finally {
    // Close client if it was opened
    await client.close()
  }
}
```

## maximum size ##

```
MongoInvalidArgumentError: Document is larger than the maximum size 16777216
```
