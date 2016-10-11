class Constructor {

	/**
	 * default constructor
	 */
	class DefaultConstructor {
		// default constructor implicited
		// public DefaultConstructor() {}
	}

	/**
	 * discard default constructor
	 */
	class DiscardDefaultConstructor {
		String name;
		// discarded default constructor
		public DiscardDefaultConstructor(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
	}

	/**
	 * multiple constructor
	 */
	class MultipleConstructor {
		public MultipleConstructor() {}
		public MultipleConstructor(String name) {}
	}

	/**
	 * my super class
	 */
	class MySuperClass {
		public MySuperClass() {
			System.out.println("**MySuperClass");
		}

		public MySuperClass(String param1) {
			System.out.println("**MySuperClass with param1");
		}
	}

	/**
	 * my class
	 */
	class MyClass extends MySuperClass {
		public MyClass() {
			System.out.println("MyClass");
		}

		public MyClass(String param1) {
			System.out.println("MyClass with param1");
		}

		public MyClass(String param1, String param2) {
			super(param1);
			System.out.println("MyClass with param1 & param2");
		}
	}

	public void run() {
		DefaultConstructor dc = new DefaultConstructor();
		// Base2 base2 = new Base2(); // compile error
		DiscardDefaultConstructor ddc = new DiscardDefaultConstructor("hello");
		MultipleConstructor mc = new MultipleConstructor();
		MultipleConstructor mc2 = new MultipleConstructor("hello");
		MyClass c = new MyClass();
		MyClass c2 = new MyClass("param1");
		MyClass c3 = new MyClass("param1", "param2");
	}
	
	public static void main(String args[]) {
		new Constructor().run();
	}
}
