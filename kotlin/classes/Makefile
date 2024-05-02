KOTLINC = kotlinc

all: main

version:
	@kotlin -version

main.jar: main.kt
	$(KOTLINC) $< -include-runtime -d $@

main: main.jar
	java -jar $<

clean:
	rm -rf main.jar

.PHONY: main version
