
// import java.lang.*; // implicitly imported
import java.util.*;

class System {
	public static void main(String args[]) {
		java.lang.System.out.println("[Arguments] - " + args.length);
		for (String arg : args) {
			java.lang.System.out.println(" - " + arg);
		}
		System sys = new System();
		sys.print();
		sys.environment();
		sys.properties();
	}

	public void print() {
		java.lang.System.out.print("Hello");
		java.lang.System.out.println();
		java.lang.System.out.printf("Hello %s\n", "TJ");
		java.lang.System.out.println("Hello World");
	}

	public void environment() {
		java.lang.System.out.println("[environment]");
		Map<String, String> env = java.lang.System.getenv();
		Iterator<String> keys = env.keySet().iterator();
		while (keys.hasNext()) {
			String key = keys.next();
			java.lang.System.out.printf("%s : %s\n", key, env.get(key));
		}
	}

	public void properties() {
		java.lang.System.out.println("[properties]");
		Properties props = java.lang.System.getProperties();
		props.list(java.lang.System.out);
	}
}
