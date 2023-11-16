all: main.exe

main.exe: main.c
	cl /Fe:$@ $**

clean:
	del main.exe *.obj

.PHONY: all clean
