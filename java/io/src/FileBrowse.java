import java.io.*;
import java.util.*;

class FileBrowse {

	public void printDir(File dir) {
		File[] files = dir.listFiles();
		for (File file : files) {
			System.out.printf("- [%s] Name: \"%s\" %s%s%s (last modified: %s)\n",
							  (file.isDirectory() ? "DIR " : "FILE"),
							  file.getName(),
							  (file.canWrite() ? "w" : "-"),
							  (file.canRead() ? "r" : "-"),
							  (file.canExecute() ? "x" : "-"),
							  new Date(file.lastModified()).toString());
		}
	}
	
	public static void main(String args[]) {
		FileBrowse browse = new FileBrowse();
		browse.printDir(new File("."));
	}
}
