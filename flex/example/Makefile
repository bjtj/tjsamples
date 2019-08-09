all: prog

lex.yy.c: ex.lex
	flex $<

prog: lex.yy.c
	cc -o $@ $< -lfl

clean:
	rm -rf prog lex.yy.c
