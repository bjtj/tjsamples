class Main {
	public static void main(String args[]) {
		Object obj = new Object();

		System.out.println("class name : " + obj.getClass().getName());
		
		System.out.println("hashCode() : " + obj.hashCode());
		System.out.println("toString() : " + obj.toString());
		Object obj2 = obj;
		System.out.println("(obj == obj2[ref]) : " + (obj == obj2));
		System.out.println("(obj.equals(obj2[ref])) : " + (obj.equals(obj2)));
		obj2 = new Object();
		System.out.println("(obj == obj2[new]) : " + (obj == obj2));
		System.out.println("(obj.equals(obj2[new])) : " + (obj.equals(obj2)));

		String x = "hello"; // const string
		String y = x;
		System.out.println("(x == y[ref]) : " + (x == y));
		System.out.println("(x.equals(y[ref])) : " + (x.equals(y)));
		y = "hello"; // const string
		System.out.println("(x == y[const]) : " + (x == y));
		System.out.println("(x.equals(y[ref])) : " + (x.equals(y)));
		y = new String("hello"); // new instance
		System.out.println("(x == y[new]) : " + (x == y));
		System.out.println("(x.equals(y[new])) : " + (x.equals(y)));

		MyThread thread = new MyThread(obj);
		thread.start();
		try {
			Thread.sleep(1000);
			synchronized(obj) {
				obj.notify();
			}
			thread.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public static class MyThread extends Thread {
		Object obj;
		public MyThread(Object obj) {
			this.obj = obj;
		}
		public void run() {
			System.out.println("waiting");
			try {
				synchronized(obj) {
					obj.wait();
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println("released");
		}
	}
}
