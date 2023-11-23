all: run

init:
	python -m pip install -r requirements.txt

check-python311:
	@python -c "import sys; assert(sys.version_info.major >= 3 and sys.version_info.minor >= 11)"

run: check-python311
	python main.py

.PHONY: all run
