import java.io.*;
import java.util.*;
import java.util.stream.*;


class Main {
	public static void main(String args[]) {

		System.out.println("Reference -- https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html");

		List<Integer> list = new ArrayList<>();
		list.add(1);
		list.add(5);
		list.add(8);

		Stream<Integer> stream = list.stream();

		stream.filter(x -> x % 2 == 0).forEach(i -> System.out.println("item: " + i));
		// stream.filter(x -> x % 2 != 0).forEach(i -> System.out.println("item: " + i)); -- error
		list.stream().filter(x -> x % 2 != 0).forEach(i -> System.out.println("item: " + i));
		list.stream().map(x -> "item -- " + x).forEach(i -> System.out.println(i));

		int arr[] = {1,5,8};
		System.out.println("Sum: " + Arrays.stream(arr).sum());

		String[] stringArr = { "This", "is", "a", "sentence" };
		System.out.println(Arrays.stream(stringArr).reduce("", (a,b) -> a + b));
	}
}
