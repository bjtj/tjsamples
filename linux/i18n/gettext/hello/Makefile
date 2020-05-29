CFLAGS = -Wall -Wextra -std=c99 -g
CPPFLAGS = -I.
LDFLAGS =

EXEC = hello

all: $(EXEC) po/ko/$(EXEC).mo

extract:
	xgettext --keyword=_ --language=C --add-comments --sort-output -o po/hello.pot hello.c

init:
	msginit --input=po/hello.pot --locale=ko --output=po/ko/hello.po --no-translator

$(EXEC): $(EXEC).c 
	$(CC) $(CFLAGS) $(CPPFLAGS) -o $@ $< $(LDFLAGS)

po/ko/$(EXEC).mo: po/ko/$(EXEC).po
	msgfmt --output-file=$@ $<

po/ko/$(EXEC).po: po/$(EXEC).pot
	msgmerge --update $@ $<

po/$(EXEC).pot: $(EXEC).c
	xgettext -k_ -j -lC -c -s -o po/hello.pot hello.c

copy:
	cp po/ko/$(EXEC).mo locale/ko/LC_MESSAGES/$(EXEC).mo

clean:
	@rm -f $(EXEC) po/ko/*.mo *~

.PHONY: clean
