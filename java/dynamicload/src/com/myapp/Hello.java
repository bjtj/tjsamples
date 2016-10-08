package com.myapp;

public class Hello {

	static {
		System.out.println(Hello.class.getName() + " loaded");
	}
	
	public void hello() {
		System.out.println("Hello World!");
	}
}
