PYTHON?=python
PIP?=$(PYTHON) -m pip

init:
	$(PIP) install -r requirements.txt

run:
	$(PYTHON) main.py

measure:
	$(PYTHON) -m timeit -n1 -r1 "from main import main; main()"

.PHONY: init run

