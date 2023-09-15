PYTHON=python3
PIP=$(PYTHON) -m pip
CYTHON=$(PYTHON) -m cython
CC=gcc
PYTHON_VERSION?=3.8
CFLAGS  = -I/usr/include/python$(PYTHON_VERSION)
CFLAGS += -I$(HOME)/.local/lib/python$(PYTHON_VERSION)/site-packages/numpy/core/include
TARGET=cyStdDev.so
CYTHON_TARGET=cyStdDev.c

all: $(TARGET)

ubuntu:
	sudo apt install -y build-essential python3-dev

init:
	$(PIP) install -r requirements.txt

%.c: %.pyx
	$(CYTHON) $<

$(TARGET): $(CYTHON_TARGET) std_dev.c std_dev.h
	$(CC) -shared -pthread -fPIC -fwrapv -Wall -fno-strict-aliasing $(CFLAGS) -o $@ $<

clean:
	rm -rf $(TARGET) $(CYTHON_TARGET)


.PHONY: all ubuntu init clean
