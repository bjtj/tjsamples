class Main {

	public static void main(String args[]) {

		try {
			Main main = new Main();
			main.compileError();
			main.runtimeError();
			main.ignoreException();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.out.println("Bye~");
		}
	}

	public void compileError() {
		String name;
		System.out.println(name); // compile error
	}

	public void runtimeError() {
		String name = null;
		name.toString();
	}

	public void ignoreException() {
		String name = null;
		try {
			name.toString();
		} catch (NullPointerException e) {
			e.printStackTrace();
		}
	}
}
