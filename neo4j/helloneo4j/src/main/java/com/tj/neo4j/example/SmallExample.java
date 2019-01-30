// Reference: https://neo4j.com/docs/api/java-driver/current/

package com.tj.neo4j.example;

import org.neo4j.driver.v1.*;
import static org.neo4j.driver.v1.Values.parameters;
import java.io.*;


class SmallExample {

    Driver driver;

    public SmallExample (String uri, String user, String password) {
	driver = GraphDatabase.driver(uri, AuthTokens.basic(user, password));
    }

    private void addPerson(String name) {
	try (Session session = driver.session()) {
	    try (Transaction tx = session.beginTransaction()) {
		tx.run("MERGE (a:Person {name: {x}})", parameters("x", name));
		tx.success();
	    }
	}
    }

    private void printPeople(String initial) {
	try (Session session = driver.session()) {
	    StatementResult result = session.run("MATCH (a:Person) WHERE a.name STARTS WITH {x} RETURN a.name AS name", parameters("x", initial));

	    System.out.println("Print People...");
	    while (result.hasNext()) {
		Record record = result.next();
		System.out.println(record.get("name").asString());
	    }
	}
    }

    private void deletePeople() {
	try (Session session = driver.session()) {
	    try (Transaction tx = session.beginTransaction()) {
		tx.run("MATCH (a:Person) DETACH DELETE a");
		tx.success();
	    }
	}
    }

    public void close() {
	driver.close();
    }
	
    
    public static void main(String args[]) throws Exception {

	BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	Console console = System.console();

	System.out.print("URL (default='bolt://localhost:7687'): ");
	String url = reader.readLine();
	if (url.isEmpty()) {
	    url = "bolt://localhost:7687";
	}
	System.out.print("username (default='neo4j'): ");
	String username = reader.readLine();
	if (username.isEmpty()) {
	    username = "neo4j";
	}
	String password = new String(console.readPassword("password: "));
	
	SmallExample example = new SmallExample(url, username, password);
	example.addPerson("Ada");
	example.addPerson("Alice");
	example.addPerson("Bob");
	example.printPeople("A");
	example.deletePeople();
	example.close();
    }
}
