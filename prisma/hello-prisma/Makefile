all: init

init:
	npm install

migrate:
	npx prisma migrate dev --name init

start:
	npx ts-node script.ts

clean:
	rm -rf node_modules

.PHONY: all init migrate start clean
