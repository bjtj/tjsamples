import java.util.*;

public class SimpleThread {

	public static class MyThread extends Thread {
		public void run() {
			System.out.println("Hello in thread #" + Thread.currentThread().getId());
		}
	}

	public static void main(String[] args) throws Exception {
		MyThread thread = new MyThread();
		System.out.println("Start thread in thread#" + Thread.currentThread().getId());
		thread.start();
		thread.join();
	}
}
