all: build

serve:
	ionic serve

build:
	npm run build

deploy-android: build
	npx cap run android


.PHONY: all serve build deploy-android
