// import java.lang.*; // implicitly imported
import java.util.*;

class Env {
	public static void main(String args[]) {
		System.out.println("[Arguments] - " + args.length);
		for (String arg : args) {
			System.out.println(" - " + arg);
		}
		Env sys = new Env();
		sys.print();
		sys.environment();
		sys.properties();

		System.exit(0);
		System.out.println("This message should not be read.");
	}

	public void print() {
		System.out.print("Hello");
		System.out.println();
		System.out.printf("Hello %s\n", "TJ");
		System.out.println("Hello World");
	}

	public void environment() {
		System.out.println("[environment]");
		Map<String, String> env = System.getenv();
		Iterator<String> keys = env.keySet().iterator();
		while (keys.hasNext()) {
			String key = keys.next();
			System.out.printf("%s : %s\n", key, env.get(key));
		}
	}

	public void properties() {
		System.out.println("[properties]");
		Properties props = System.getProperties();
		props.list(System.out);
	}
}
