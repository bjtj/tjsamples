import java.util.*;
import java.net.*;

class Main {
	public static void main(String args[]) throws SocketException {
		Enumeration<NetworkInterface> ifaces = NetworkInterface.getNetworkInterfaces();

		while (ifaces.hasMoreElements()) {
			NetworkInterface iface = ifaces.nextElement();
			String name = iface.getName();
			System.out.printf("[%s]\n", name);
			Enumeration<InetAddress> addrs = iface.getInetAddresses();
			while (addrs.hasMoreElements()) {
				InetAddress addr = addrs.nextElement();
				boolean isIpv6 = (addr instanceof Inet6Address);
				System.out.printf(" - (%s)%s\n", (isIpv6 ? "ipv6" : "ipv4"),
								  addr.getHostAddress());
			}
		}
	}
}
