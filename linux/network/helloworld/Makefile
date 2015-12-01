all:
	gcc -o tcpserver tcpserver.c
	gcc -o tcpclient tcpclient.c

test:
	./tcpserver &
	./tcpclient

clean:
	rm -rf tcpserver tcpclient
