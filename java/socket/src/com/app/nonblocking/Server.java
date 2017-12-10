package com.app.nonblocking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 *
 */
public class Server {

	public static final int PORT_NUMBER = 9891;

	private Abortable abortable;
	private ServerThread serverThread;

	/**
     * 
     */
	public Server() {
		abortable = new Abortable();
	}

	/**
     * 
     * @param args
     * @throws Exception
     */
	public static void main(String[] args) throws Exception {


		Server server = new Server();
		server.start();

		Thread.sleep(500);

		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		reader.readLine();

		server.stop();

		System.out.println("BYE");
	}

	/**
     * start server
     */
	public void start() {

		abortable.init();

		if (serverThread == null || !serverThread.isAlive()) {
			serverThread = new ServerThread(abortable);
			serverThread.start();
		}
	}

	/**
     * stop server
     */
	public void stop() {

		abortable.done = true;

		if (serverThread != null && serverThread.isAlive()) {
			serverThread.interrupt();
		}

	}

	/**
     *
     */
	public class ServerThread extends Thread {

		private Abortable abortable;
		private List<Thread> clientList = new ArrayList<Thread>();

		public ServerThread(Abortable abortable) {
			this.abortable = abortable;
		}

		@Override
		public void run() {
			super.run();

			ServerSocketChannel server = null;
			Selector selector = null;

			try {

				System.out.println("Server :: started");

				server = ServerSocketChannel.open();
				server.socket().bind(new InetSocketAddress("", PORT_NUMBER));
				server.configureBlocking(false);

				selector = Selector.open();
				server.register(selector, SelectionKey.OP_ACCEPT);

				System.out.println("Server :: waiting for accept");

				while (!Thread.interrupted() && !abortable.isDone()) {
					selector.select(3000);

					Iterator<SelectionKey> iter = selector.selectedKeys().iterator();
					while (iter.hasNext()) {

						SelectionKey key = iter.next();
						if (key.isAcceptable()) {

							ServerSocketChannel channel = (ServerSocketChannel)key.channel();
							SocketChannel client = channel.accept();

							if (client != null) {
								System.out.printf("Server :: accepted - client [%s]\n", client);
								Thread t = new ClientHandlerThread(abortable, client);
								t.start();
								clientList.add(t);
							}
						}
						iter.remove();
					}
				}

			} catch (Exception e) {

				e.printStackTrace();

			} finally {

				for (Thread t : clientList) {

					if (t != null && t.isAlive())
						t.interrupt();

					try {
						t.join(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}

				if (server != null) {

					try {
						server.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}

				System.out.println("Server :: done");

			}
		}
	}

	/**
     *
     */
	public class ClientHandlerThread extends Thread {

		private Abortable abortable;
		private SocketChannel client;

		public ClientHandlerThread(Abortable abortable, SocketChannel client) {
			this.abortable = abortable;
			this.client = client;
		}

		@Override
		public void run() {
			super.run();

			Selector selector = null;
			Charset cs = Charset.forName("UTF-8");

			boolean done = false;

			try {

				System.out.println("Client :: started");

				client.configureBlocking(false);
				selector = Selector.open();

				client.register(selector, SelectionKey.OP_READ);

				// send welcome message
				client.write(ByteBuffer.wrap(new String("Welcome").getBytes()));

				ByteBuffer buffer = ByteBuffer.allocate(1024);

				while (!Thread.interrupted() && !abortable.isDone() && !done) {
					selector.select(3000);

					Iterator<SelectionKey> iter = selector.selectedKeys().iterator();
					while (!abortable.isDone() && iter.hasNext() && !done) {
						SelectionKey key = iter.next();
						if (key.isReadable()) {
							int len = client.read(buffer);
							if (len < 0) {
								done = true;
								break;
							} else if (len == 0) {
								continue;
							}
							buffer.flip();

							CharBuffer cb = cs.decode(buffer);

							System.out.printf("From Client : ");
							while (cb.hasRemaining()) {
								System.out.printf("%c", cb.get());
							}
							System.out.println();

							buffer.compact();
						}
						iter.remove();
					}
				}

			} catch (Exception e) {
				e.printStackTrace();
			} finally {

				if (client != null) {
					try {
						client.socket().close();
						client.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}

				System.out.println("Client :: bye");
			}
		}
	}
}
