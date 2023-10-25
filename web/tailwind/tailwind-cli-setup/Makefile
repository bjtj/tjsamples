all: init

init:
	npm i

build:
	npx tailwindcss -i ./src/input.css -o ./dist/output.css

dev:
	npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

serve:
	npx serve

.PHONY: all dev serve

