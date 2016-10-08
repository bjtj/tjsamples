import java.io.*;
import java.net.*;
import java.util.*;

class HttpGet {
	public static void main(String args[]) throws IOException {
		URL url = new URL(args[0]);
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		InputStream in = conn.getInputStream();
		int ch;
		StringBuffer sb = new StringBuffer();
		while ((ch = in.read()) >= 0) {
			sb.append((char)ch);
		}
		in.close();
		System.out.println(sb.toString());
	}
}
