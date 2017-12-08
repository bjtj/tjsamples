package com.app.nonblocking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.SocketChannel;
import java.nio.charset.Charset;
import java.util.Iterator;

/**
 *
 */
public class Client {

	private Abortable abortable = new Abortable();
	private ClientThread clientThread;

	/**
     * 
     * @param args
     * @throws Exception
     */
	public static void main(String[] args) throws Exception {

		Client client = new Client();
		client.start("127.0.0.1", Server.PORT_NUMBER);

		Thread.sleep(500);

		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

		while (true) {
			String line = reader.readLine();

			if (line.equals("quit"))
				break;

			try {
				client.sayToServer(line);
			} catch (Exception e) {
				e.printStackTrace();
				break;
			}

		}

		client.stop();

		System.out.println("BYE");
	}

	/**
     * start client
     * 
     * @param host
     * @param port
     */
	public void start(String host, int port) {

		abortable.init();


		if (clientThread == null || !clientThread.isAlive()) {
			clientThread = new ClientThread(abortable, host, port);
			clientThread.start();
		}
	}

	/**
     * stop client
     */
	public void stop() {

		abortable.done = true;

		if (clientThread != null && clientThread.isAlive()) {
			clientThread.interrupt();
		}

	}

	/**
     * 
     * @param text
     * @throws IOException
     */
	public void sayToServer(String text) throws IOException {
		clientThread.sayToServer(text);
	}

	/**
     *
     */
	public class ClientThread extends Thread {

		private Abortable abortable;
		private String host;
		private int port;
		private SocketChannel client;

		/**
         * 
         * @param abortable
         * @param host
         * @param port
         */
		public ClientThread(Abortable abortable, String host, int port) {
			this.abortable = abortable;
			this.host = host;
			this.port = port;
		}

		/**
         * 
         * @param text
         * @throws IOException 
         */
		public void sayToServer(String text) throws IOException {
			int len = client.write(ByteBuffer.wrap(text.getBytes()));
			System.out.printf("[write :: text : %s / len : %d]\n", text, len);
		}

		@Override
		public void run() {
			super.run();

			boolean done = false;
			Selector selector = null;
			Charset cs = Charset.forName("UTF-8");

			try {

				System.out.println("Client :: started");

				client = SocketChannel.open();
				client.configureBlocking(false);
				client.connect(new InetSocketAddress(host, port));

				selector = Selector.open();
				client.register(selector, SelectionKey.OP_READ);

				while (!Thread.interrupted() && !abortable.isDone() && !client.finishConnect()) {
					Thread.sleep(10);
				}

				System.out.println("Client :: connected");

				ByteBuffer buffer = ByteBuffer.allocate(1024);

				while (!Thread.interrupted() && !abortable.isDone() && !done) {

					if (selector.select(3000) > 0) {

						Iterator<SelectionKey> iter = selector.selectedKeys().iterator();
						while (!Thread.interrupted() && !abortable.isDone() && !done && iter.hasNext()) {
							SelectionKey key = iter.next();
							if (key.isReadable()) {
								SocketChannel channel = (SocketChannel)key.channel();
								int len = channel.read(buffer);
								if (len < 0) {
									System.out.println("Client :: server closed");
									done = true;
									break;
								} else if (len == 0) {
									continue;
								}
								buffer.flip();

								CharBuffer cb = cs.decode(buffer);

								System.out.printf("From Server : ");
								while (cb.hasRemaining()) {
									System.out.printf("%c", cb.get());
								}
								System.out.println();

								buffer.compact();
							}
							iter.remove();
						}
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

				System.out.println("Client :: done");
			}

		}
	}
}
