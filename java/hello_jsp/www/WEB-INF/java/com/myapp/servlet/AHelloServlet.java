package com.myapp.servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

@WebServlet("/ahello")
public class AHelloServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request,
					  HttpServletResponse response)
		throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter writer = response.getWriter();
		writer.println("<h1>AHello!</h1>");
	}
}
