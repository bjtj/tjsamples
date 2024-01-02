ifeq ($(OS),Windows_NT)
	RESOLVE_PATH=set "PYTHONPATH=%PYTHONPATH%;."
else 
	RESOLVE_PATH=PYTHONPATH=$$PYTHONPATH:.
endif


all: test

init:
	pip install -r requirements.txt

test:
	$(RESOLVE_PATH) && pytest

test-add:
	$(RESOLVE_PATH) && pytest -q tests/test_add.py

.PHONY: test
