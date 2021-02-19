package com.tjapps.mdbexample;

import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;

import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;

import org.bson.Document;

import java.util.Arrays;
import java.util.Date;


class Application {
    public static void main(String[] args) {
	// https://mongodb.github.io/mongo-java-driver/4.2/driver/getting-started/quick-start/
	MongoClient mongoClient = MongoClients.create();

	MongoDatabase database = mongoClient.getDatabase("test");
	MongoCollection<Document> collection = database.getCollection("test");

	collection.drop();
	
	Document doc = new Document("name", "MongoDB")
	    .append("type", "database")
	    .append("count", 1)
	    .append("versions", Arrays.asList("v3.2", "v3.0", "v2.6"))
	    .append("info", new Document("x", 203).append("y", 102));
	collection.insertOne(doc);

	Document doc2 = new Document("name", "tester1")
	    .append("registerDate", new Date());
	collection.insertOne(doc2);


	Document embedded = new Document("name", "namex")
	    .append("registerDate", new Date());
	Document doc3 = new Document("name", "tester2")
	    .append("embed", embedded)
	    .append("registerDate", new Date());
	collection.insertOne(doc3);

	Document myDoc = collection.find().first();
	System.out.println(myDoc.toJson());

	MongoCursor<Document> cursor = collection.find().iterator();
	try {
	    while (cursor.hasNext()) {
		Document item = cursor.next();
		System.out.println(item.toJson());
		System.out.println(item.get("registerDate"));
		System.out.println(item.get("embed"));
	    }
	} finally {
	    cursor.close();
	}
    }
}
