

all: hello.exe

hello.exe: hello.cs
	csc $<

.PHONY: run
run: hello.exe
	mono $<

clean:
	rm -rf hello.exe
