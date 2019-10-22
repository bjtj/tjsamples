LDFLAGS=-L/usr/local/opt/flex/lib -lfl
CPPFLAGS=-I/usr/local/opt/flex/include

all: prog

lex.yy.c: ex.lex
	flex $<

prog: lex.yy.c
	cc -o $@ $< $(LDFLAGS) $(CPPFLAGS)

clean:
	rm -rf prog lex.yy.c
