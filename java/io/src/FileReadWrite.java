import java.io.*;

class FileReadWrite {

	public void writeFile(File path, String text) throws IOException {
		FileOutputStream out = new FileOutputStream(path);
		out.write(text.getBytes());
		out.close();
	}

	public String readFile(File path) throws IOException {
		StringBuffer sb = new StringBuffer();
		FileInputStream in = new FileInputStream(path);
		int ch;
		while ((ch = in.read()) > 0) {
			sb.append((char)ch);
		}
		in.close();
		return sb.toString();
	}
	
	public static void main(String args[]) throws IOException {
		File file = new File("./greeting.txt");
		FileReadWrite readWrite = new FileReadWrite();
		readWrite.writeFile(file, "A: Hi!\nB: Hi!\nA: Bye!!\nB: Bye Bye!\n");
		String text = readWrite.readFile(file);
		System.out.println("[READ]");
		System.out.println(text);

		BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
		String line;
		for (int i = 0; (line = reader.readLine()) != null; i++) {
			System.out.printf("line %d  %s\n", i+1, line);
		}
		reader.close();
	}
}
