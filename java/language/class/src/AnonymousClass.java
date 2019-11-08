class AnonymousClass {

	public static class MyHandler {
		public void handle(String name) {
			System.out.println(name);
		}
	}

	public void doHandle(MyHandler handler, String name) {
		handler.handle(name);
	}
	
	public static void main(String args[]) {

		AnonymousClass an = new AnonymousClass();

		an.doHandle(new MyHandler() {
				public void handle(String name) {
					System.out.println(new StringBuilder(name).reverse().toString());
				}}, "Steve");

		MyHandler handler = new MyHandler() {
				public void handle(String name) {
					System.out.printf("Hello %s\n", name);
				}
			};

		an.doHandle(handler, "Steve");
	}
}
