RUSTC = rustc
PROG=main

all: build

build:
	$(RUSTC) ${PROG}.rs

run: build
	./${PROG}

clean:
	rm -rf ${PROG}
