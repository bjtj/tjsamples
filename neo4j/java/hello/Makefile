all: build run


build:
	mvn clean dependency:copy-dependencies package

run:
	java -cp target/helloneo4j-1.0-SNAPSHOT.jar:target/dependency/neo4j-java-driver-1.7.2.jar com.tj.neo4j.example.SmallExample

