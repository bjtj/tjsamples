# MongoDB C# Driver #

<https://www.mongodb.com/docs/drivers/csharp/current/>

## Quick Start ##

<https://www.mongodb.com/docs/drivers/csharp/current/quick-start/#std-label-csharp-quickstart>

``` shell
dotnet add package MongoDB.Driver
```

## Connection Guide ##

<https://www.mongodb.com/docs/drivers/csharp/current/fundamentals/connection/connect/>

ping

``` c#
using MongoDB.Driver;
using MongoDB.Bson;

// Replace the placeholder with your Atlas connection string
const string connectionUri = "<connection string>";

var settings = MongoClientSettings.FromConnectionString(connectionUri);

// Set the ServerApi field of the settings object to Stable API version 1
settings.ServerApi = new ServerApi(ServerApiVersion.V1);

// Create a new client and connect to the server
var client = new MongoClient(settings);

// Send a ping to confirm a successful connection
try {
    var result = client.GetDatabase("admin").RunCommand<BsonDocument>(new BsonDocument("ping", 1));
    Console.WriteLine("Pinged your deployment. You successfully connected to MongoDB!");
} catch (Exception ex) { Console.WriteLine(ex);}
```
