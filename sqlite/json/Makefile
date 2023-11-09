all: test

countries.json:
	./getjson.sh

my.db: countries.json
	python main.py

test: my.db
	sqlite3 my.db ".read test.sql"

clean:
	rm -rf my.db countries.json


.PHONY: all test
