

all: hello.exe

hello.exe: hello.cs
	csc $< -r:System.Windows.Forms.dll

.PHONY: run
run: hello.exe
	mono $<

clean:
	rm -rf hello.exe
