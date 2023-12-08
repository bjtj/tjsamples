public class Program
{
	public static void Main() {

		System.Console.WriteLine("=== Files ===");
		
		var files = Directory.GetFiles(".");
		foreach (var file in files) {
			System.Console.WriteLine($"{file}");
		}

		System.Console.WriteLine("=== Directories ===");

		var dirs = Directory.GetDirectories(".");
		foreach (var dir in dirs) {
			System.Console.WriteLine($"{dir}");
		}
	}
}
