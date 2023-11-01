all: hello

hello: hello.obj
	link hello.obj /subsystem:windows /entry:WinMain /nodefaultlib kernel32.lib user32.lib /largeaddressaware:no

hello.obj:
	nasm -f win64 hello.asm

clean:
	del hello.obj hello.exe

.PHONY: all
