package com.app.tcp;

import java.io.*;
import java.net.*;

class Client {
	public static void main(String args[]) throws IOException {
		Socket client = new Socket("127.0.0.1", 9001);
		InputStream in = client.getInputStream();
		int ch = 0;
		while ((ch = in.read()) > 0) {
			System.out.print((char)ch);
		}
		client.close();
	}
}
