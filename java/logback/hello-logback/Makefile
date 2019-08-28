all: run

package:
	mvn clean package

run:
	mvn clean package exec:java -D exec.mainClass=com.tjapp.logback.example.App

clean:
	mvn clean
