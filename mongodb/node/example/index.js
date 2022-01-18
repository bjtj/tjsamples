const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

function main() {

    const client = new MongoClient(uri);

    async function run() {

	try {
	    await client.connect();
	    const collection = await client.db("mydb").collection("mycollection")
	    
	    // https://docs.mongodb.com/drivers/node/current/fundamentals/crud/read-operations/retrieve/
	    
	    const cursor = collection.find()
	    await cursor.forEach(console.dir)

	} finally {
	    await client.close()
	}
    }

    run().catch(console.dir)
}

main()
