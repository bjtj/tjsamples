import java.io.*;
import java.util.*;
import java.util.function.*;



class Main {
	public static void main(String args[]) {

		System.out.println("Reference -- https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html");
		
		Runnable runable = () -> System.out.println("hello world");
		runable.run();


		List<Person> pl = Person.createShortList();
		for (Person person : pl) {
			System.out.println(person.printCustom(p -> "Name: " + p.getGivenName() + " Email: " + p.getEmail()));
		}

		System.out.println(" == Western names ==");
		pl.forEach(p -> p.printWesternName());

		System.out.println(" == Eastern names ==");
		pl.forEach(Person::printEasternName);

		System.out.println(" == Custom Phone List ==");
		pl.forEach(p -> { System.out.println(p.printCustom(r -> "Name: " + r.getGivenName() + " Email: " + r.getEmail())); });
	}
}
