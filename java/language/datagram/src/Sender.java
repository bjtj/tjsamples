import java.io.*;
import java.net.*;

class Sender {
	public static void main(String args[]) throws IOException {
		DatagramSocket socket = new DatagramSocket();
		String msg = "hello";
		DatagramPacket packet = new DatagramPacket(msg.getBytes(), msg.length(), InetAddress.getByName("localhost"), 9001);
		socket.send(packet);
		socket.close();
	}
}
