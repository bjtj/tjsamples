

all: hello.exe

hello.exe: hello.cs
	mcs $< -pkg:gtk-sharp-2.0

.PHONY: run
run: hello.exe
	mono $<

clean:
	rm -rf bin obj hello.exe
