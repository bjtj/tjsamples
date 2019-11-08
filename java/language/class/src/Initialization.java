class Initialization {


	/**
	 * initialization sequence
	 */
	public static class InitializationSequence {

		public static int i_static;
		public int i;
		public int j = 2;
		public int x = j;

		static {
			System.out.println("static{}");
		}

		{
			System.out.println("{}");
		}
	
		public InitializationSequence() {
			int num;
			System.out.println("Constructor - " + this.getClass().getName());
			System.out.printf(" - i(static): %d, i: %d\n", i_static++, i++);
			System.out.printf(" - j: %d, x: %d\n", j, x);
			// System.out.println("" + num); // compile error - num (local variable) is not initialized
		}
	}
	
	public static void main(String args[]) {
		new Initialization.InitializationSequence();
		new Initialization.InitializationSequence();
	}
}
