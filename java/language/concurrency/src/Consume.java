import java.util.*;

class Consume {

	/**
	 * Consumer
	 */
	public static class Consumer extends Thread {

		private List<String> messages;
		
		public Consumer(List<String> messages) {
			this.messages = messages;
		}
		
		public void run() {

			try {
				
				while (!Thread.interrupted()) {
					synchronized(messages) {
						if (messages.size() > 0) {
							for (String message : messages) {
								System.out.printf("Message come \"%s\"\n", message);
							}
							messages.clear();
						}
					}
					Thread.sleep(10);
				}

			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * Feeder
	 */
	public static class Feeder extends Thread {
		private List<String> messages;
		private long intervalFeed;
		private int counter;
		public Feeder(List<String> messages, long intervalFeed) {
			this.messages = messages;
			this.intervalFeed = intervalFeed;
		}
		public void run() {
            try {
				
				while (!Thread.interrupted()) {
					synchronized(messages) {
						messages.add("Count " + counter++);
					}
					Thread.sleep(intervalFeed);
				}

			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void main(String args[]) throws Exception {
		List<String> messages = new ArrayList<>();
		Consumer consumer = new Consumer(messages);
		Feeder feeder = new Feeder(messages, 1000);

		consumer.start();
		feeder.start();

		Thread.sleep(5000);

		consumer.interrupt();
		feeder.interrupt();
		
		consumer.join();
		feeder.join();
	}
}
