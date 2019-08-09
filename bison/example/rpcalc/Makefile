all: rpcalc

rpcalc.tab.c: rpcalc.y
	bison rpcalc.y

rpcalc: rpcalc.tab.c
	cc -g -Wall rpcalc.tab.c -lm -o rpcalc

clean:
	rm -rf rpcalc
