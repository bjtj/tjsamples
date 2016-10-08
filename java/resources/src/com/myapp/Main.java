package com.myapp;

import java.io.*;

class Main {

	public static void main(String args[]) throws IOException {
		System.out.println("user.home: " + System.getProperty("user.home"));
		System.out.println("java.home: " + System.getProperty("java.home"));
		test1();
		test2();
	}

	public static void test1() throws IOException {
		InputStream in = Main.class.getResourceAsStream("/com/myapp/secret.properties");
		int ch;
		while ((ch = in.read()) >= 0) {
			System.out.print((char)ch);
		}
		in.close();
	}

	public static void test2() throws IOException {
		InputStream in = Main.class.getResourceAsStream("secret.properties");
		int ch;
		while ((ch = in.read()) >= 0) {
			System.out.print((char)ch);
		}
		in.close();
	}
}
