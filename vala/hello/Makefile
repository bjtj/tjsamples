all: main.c main


main: main.vala
	valac $<

main.c: main.vala
	valac -C $<

clean:
	rm -rf main main.c
