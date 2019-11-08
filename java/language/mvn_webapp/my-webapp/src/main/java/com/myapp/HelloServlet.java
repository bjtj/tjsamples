package com.myapp;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request,
					  HttpServletResponse response)
		throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter writer = response.getWriter();
		writer.println("<h1>Hello!</h1>");
	}
}
