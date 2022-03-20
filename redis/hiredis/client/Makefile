CFLAGS=`pkg-config --cflags hiredis`
LDFLAGS=`pkg-config --libs hiredis`

all:
	gcc -o app main.c ${CFLAGS} ${LDFLAGS}
