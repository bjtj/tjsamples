.PHONY: all build package clean

all: build

init:
	mkdir -p build

build: init
	javac -cp .:src src/com/test/hello/Main.java -d build

package:
	jar cf hello.jar -C build .

clean:
	rm -rf build hello.jar
