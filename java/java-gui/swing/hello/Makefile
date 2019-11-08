all: build

build:
	mkdir -p dist
	javac -cp src src/Main.java -d dist/

run:
	java -cp dist Main

clean:
	rm -rf dist
