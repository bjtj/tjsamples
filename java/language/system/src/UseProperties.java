import java.util.*;
import java.io.*;

class UseProperties {
	public static void main(String args[]) throws Exception {

		String path = "./myenv.properties";

		File propFile = new File(path);
		if (!propFile.exists()) {
			new FileOutputStream(path).close();
		}
		
		Properties props = new Properties();
		props.load(new FileReader(path));
		String name = props.getProperty("name");
		System.out.println("name : " + name);

		props.setProperty("name", "Steve");
		props.store(new FileOutputStream(path), null);
	}
}
