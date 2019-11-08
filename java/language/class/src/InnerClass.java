class InnerClass {

	class MyOuterClass {
		class MyInnerClass {
		}
	}

	public InnerClass() {
		MyOuterClass.MyInnerClass innerObject = new MyOuterClass().new MyInnerClass();
	}
	
	public static void main(String args[]) {
		new InnerClass();
	}
}
