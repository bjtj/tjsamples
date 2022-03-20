CFLAGS=`pkg-config --cflags hiredis hiredis_cluster`
LDFLAGS=`pkg-config --libs hiredis hiredis_cluster`

all:
	gcc -o app main.c ${CFLAGS} ${LDFLAGS}


clean:
	rm -rf prog
