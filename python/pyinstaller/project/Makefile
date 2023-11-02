all: dist

init:
	pip install -U pyinstaller

dist:
	if exist dist rmdir /s /q dist
	pyinstaller --paths=. --noconfirm mylib/script/main.py

run:
	./dist/main/main

.PHONY: all init dist run
