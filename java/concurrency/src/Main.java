class Main {

	public static class GreetThread extends Thread {
		private int count;
		private String message;
		public GreetThread(int count, String message) {
			this.count = count;
			this.message = message;
		}
		@Override
		public void run() {
			for (int i = 0; i < count; i++) {
				System.out.println((i+1) + " " + message);
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	}

	public static void main(String args[]) throws Exception {
		GreetThread greetThread = new GreetThread(3, "Hello World");
		greetThread.start();
		greetThread.join();
		System.out.println("Bye~");
	}
}
