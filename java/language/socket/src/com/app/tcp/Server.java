package com.app.tcp;

import java.io.*;
import java.net.*;

class Server {
	public static void main(String args[]) throws IOException {
		ServerSocket server = new ServerSocket(9001);
		Socket client = server.accept();
		OutputStream out = client.getOutputStream();
		out.write("hello".getBytes());
		client.close();
		server.close();
	}
}
