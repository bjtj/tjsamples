package com.tjapp.sample.jdbc.basic;

import java.io.*;
import java.sql.*;


class Basic {

    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private static final String DB_URL = "jdbc:mysql://localhost/mydb?characterEncoding=UTF-8&serverTimezone=UTC";
	
    public static void main(String args[]) throws Exception {
	BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

	System.out.print("username: ");
	String username = reader.readLine();
	System.out.print("password: ");
	String password = reader.readLine();

	Class.forName(DRIVER);
	Connection conn = DriverManager.getConnection(DB_URL, username, password);

	int idx = 0;
	while (true) {
	    System.out.print("> ");
	    String line = reader.readLine();
	    if (line.equals("quit")) {
		break;
	    } else if (line.equals("ls")) {
		Statement stmt = conn.createStatement();
		String sql = "select * from users order by reg_date desc;";
		ResultSet rs = stmt.executeQuery(sql);
		while (rs.next()) {
		    String name = rs.getString("name");
		    String email = rs.getString("email");
		    String regDate = rs.getString("reg_date");
		    System.out.printf("name: %s, email: %s, reg date: %s\n", name, email, regDate);
		}
		rs.close();
		stmt.close();
	    } else if (line.equals("newx")) {
		String sql = "insert users (name, email, reg_date) values (?, ?, now())";
		PreparedStatement ps = conn.prepareStatement(sql);
		String name = "user" + (idx++);
		ps.setString(1, name);
		ps.setString(2, name + "@localhost");
		ps.executeUpdate();
		ps.close();
	    } else {
		System.err.println("Unknown command - " + line);
	    }
	}

	conn.close();
    }
}
