package com.tjapp.mail;

import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;


public class Main {
	public static void main(String args[]) throws Exception {

		System.out.print("from: ");
		String from = new BufferedReader(new InputStreamReader(System.in)).readLine();
		System.out.println(from);

		System.out.print("to: ");
		String to = new BufferedReader(new InputStreamReader(System.in)).readLine();
		System.out.println(to);

		String host = "localhost";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);
		try {

			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject("This is a subject line!");
			message.setText("This is actual message");
			Transport.send(message);
			System.out.println("Sent message successfully...");
			
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
