.PHONY: all build run

all: build

build:
	docker build -t myweb:0.1 .

run:
	docker run -d --name myweb -p 8080:80 myweb:0.1

stop:
	docker rm -f myweb

create-service:
	docker service create -p 8080:80 --replicas 3 --name myweb-service myweb:0.1

remove-service:
	docker service rm myweb-service


