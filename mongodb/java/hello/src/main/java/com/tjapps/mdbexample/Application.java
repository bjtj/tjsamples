package com.tjapps.mdbexample;

import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;

import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;

import org.bson.Document;

import java.util.Arrays;


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

	Document myDoc = collection.find().first();
	System.out.println(myDoc.toJson());

	MongoCursor<Document> cursor = collection.find().iterator();
	try {
	    while (cursor.hasNext()) {
		System.out.println(cursor.next().toJson());
	    }
	} finally {
	    cursor.close();
	}
    }
}
