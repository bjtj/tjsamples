import java.io.*;

class Console {
    public static void main(String args[]) throws Exception {
	BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	System.out.print("Enter: ");
	String line = reader.readLine();
	System.out.println("Your input - " + line);
    }
}
