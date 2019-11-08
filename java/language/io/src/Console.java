import java.io.*;

class Console {
    public static void main(String args[]) throws Exception {
	BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
	System.out.print("Enter: ");
	String line = reader.readLine();
	System.out.println("Your input - " + line);

	// password masking
	// - https://stackoverflow.com/a/8138549

	java.io.Console console = System.console();
	if (console == null) {
	    System.out.println("Couldn't get Console instance");
	    System.exit(0);
	}

	char[] passwordArray = console.readPassword("Enter your password: ");
	console.printf("Password entered was %s%n", new String(passwordArray));
    }
}
