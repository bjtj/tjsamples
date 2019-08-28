package com.tj.jetty.example;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.IOException;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;

/**
 * Hello world!
 *
 */
public class App extends AbstractHandler
{

    public void handle(String target, Request baseRequest,
		       HttpServletRequest request, HttpServletResponse response)
	throws IOException, ServletException {
	response.setContentType("text/html;charset=utf-8");
	response.setStatus(HttpServletResponse.SC_OK);
	baseRequest.setHandled(true);
	response.getWriter().println("<h1>Hello World</h1>");
    }
    
    public static void main( String[] args ) throws Exception {
        Server server = new Server(8080);
	server.setHandler(new App());
	server.start();
	server.join();
    }
}
