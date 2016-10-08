import java.io.*;


class UseProcessing {
	public static void main(String args[]) throws Exception {
		ProcessBuilder builder = new ProcessBuilder("ls", "-asl", ".");
		Process process = builder.start();
		BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
		String line;
		while ((line = reader.readLine()) != null) {
			System.out.println(line);
		}
	}
}
