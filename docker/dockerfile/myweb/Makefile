.PHONY: all build run

all: build

build:
	docker build -t myweb:0.1 .

run:
	docker run -d --name myweb -p 8080:80 myweb:0.1

stop:
	docker rm -f myweb
