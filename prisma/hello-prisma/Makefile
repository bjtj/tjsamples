all: init

init:
	npm install

migrate:
	npx prisma migrate dev --name init

start:
	npx ts-node script.ts

.PHONY: all init migrate start
