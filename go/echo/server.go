package main

import (
	"flag"
	"log"
	"net"
	"strconv"
)

func main() {
	port := flag.Int("port", 3333, "Port to accept connections on.")
	flag.Parse()

	l, err := net.Listen("tcp", ":" + strconv.Itoa(*port))
	if err != nil {
		log.Panicln(err)
	}
	log.Println("Listening to connections on port", strconv.Itoa(*port))
	defer l.Close()

	for {
		conn, err := l.Accept()
		if err != nil {
			log.Panicln(err)
		}

		go handleRequest(conn)
	}
}

func handleRequest(conn net.Conn) {
	log.Println("Accepted new connection.")
	defer log.Println("Closed connection.")

	buf := make([]byte, 1024)
	size, err := conn.Read(buf)
	if err != nil {
		return
	}
	data := buf[:size]
	log.Println("RECV:", string(data))
	conn.Write(data)
	conn.Close()
}

