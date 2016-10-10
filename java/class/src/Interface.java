class Interface {

	public static interface MyListener {
		
		static void hello() {
			System.out.println("hello");
		}
		
		void greet();
		public void greet1();
		// private void greet2(); // compile error - not allowed
		// protected void greet3(); // compile error - not allowed

		default void bye() {
			System.out.println("bye");
		}
	}
	
	public static void main(String args[]) {
		// new MyListener(); // compile error - abstract cannot be instantiated
		new MyListener() {
			public void greet() {
				System.out.println("greet");
			}
			public void greet1() {
				System.out.println("greet1");
			}
		}.greet();

		MyListener.hello();
	}
}
