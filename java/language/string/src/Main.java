import java.util.regex.*;

class Main {
	public static void main(String args[]) {
		new Main().substring();
		new Main().stringBuilder();
		new Main().regex();
	}

	public void substring() {
		String str = "hello world";
		int idx = str.indexOf(" ");
		System.out.println(str.substring(0, idx));
		System.out.println(str.substring(idx));
		System.out.println(str.substring(idx + 1));
	}

	public void stringBuilder() {
		StringBuilder sb = new StringBuilder();
		sb.append("Hello");
		sb.append(" ");
		sb.append("World");
		System.out.println(sb.toString());
	}

	public void regex() {
		String str = "<h2>title1</h2>body<h2>title2</h2>body2<h2>title3</h2>body3";
		Pattern p = Pattern.compile("<h2>");
		Matcher m = p.matcher(str);
		StringBuffer sb = new StringBuffer();
		int b = 0;
		while (m.find()) {
			System.out.printf("%d %d\n", m.start(), m.end());
			if (b < m.start()+)) {
				sb.append(str.substring(b, m.start()));
			}
			sb.append("[DECO]");
			sb.append(str.substring(m.start(), m.end()));
			b = m.end();
		}
		System.out.println(sb.toString());
	}
}
