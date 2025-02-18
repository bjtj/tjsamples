MVN ?= mvn

all: package

package:
	$(MVN) -Pnative package -DskipTests

clean:
	$(MVN) clean

.PHONY: all package clean
