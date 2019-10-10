
all: hello.jar

.PHONY: version
version:
	@kotlin -version

hello.jar:
	kotlinc hello.kt -include-runtime -d hello.jar

.PHONY: hello
hello: hello.jar
	java -jar $<

.PHONY: helloscript
helloscript:
	java -jar $(KOTLIN_HOME)/lib/kotlin-compiler.jar -script hello.kts
# kotlinc -script hello.kts

clean:
	rm -rf hello.jar
