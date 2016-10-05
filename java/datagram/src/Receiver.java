import java.io.*;
import java.net.*;

class Receiver {
	public static void main(String args[]) throws IOException {
		DatagramSocket socket = new DatagramSocket(9001);
		byte[] buffer = new byte[1024];
		DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
		socket.receive(packet);
		System.out.println(new String(packet.getData(), 0, packet.getLength(), "utf8"));
		socket.close();
	}
}
