all: main.exe

main.exe: main.obj
	link /OUT:$@ /LIBPATH:SDL2-2.28.5/lib/x64 main.obj SDL2.lib SDL2main.lib shell32.lib /SUBSYSTEM:WINDOWS

main.obj: main.c
	cl /I ./SDL2-2.28.5/include /c $**

clean:
	del *.obj main.exe

.PHONY: all clean
