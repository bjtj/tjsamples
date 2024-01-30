all: init

init:
	npm install && cd hello && npm install

start:
	npm run start

build-hello:
	cd hello && npm run build

link-local:
	npm install --install-links

clean:
	npm run clean && cd hello && npm run clean

.PHONY: all init start build-hello link-local clean
