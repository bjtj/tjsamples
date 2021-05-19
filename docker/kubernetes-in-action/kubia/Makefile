all: build

build:
	docker build -t kubia:latest .

history:
	docker history kubia:latest

run:
	docker run --name kubia-container -p 1234:8080 -d kubia
