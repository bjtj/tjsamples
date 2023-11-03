using MongoDB.Driver;
using MongoDB.Bson;

var connectionString = Environment.GetEnvironmentVariable("MONGODB_URI");
if (connectionString == null)
{
  connectionString = "mongodb://localhost:27017";
}

var client = new MongoClient(connectionString);

var result = client.GetDatabase("admin").RunCommand<BsonDocument>(new BsonDocument("ping", 1));
Console.WriteLine($"Ping result: {result}");
