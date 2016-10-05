class Main {
	public static void main(String args[]) {
		String str = "hello world";
		int idx = str.indexOf(" ");
		System.out.println(str.substring(0, idx));
		System.out.println(str.substring(idx));
		System.out.println(str.substring(idx + 1));

		StringBuilder sb = new StringBuilder();
		sb.append("Hello");
		sb.append(" ");
		sb.append("World");
		System.out.println(sb.toString());
	}
}
