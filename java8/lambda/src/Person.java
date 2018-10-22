import java.util.*;
import java.util.function.*;


public class Person {
	private String givenName;
	private String surName;
	private int age;
	private Gender gender;
	private String eMail;
	private String phone;
	private String address;

	public void printWesternName() {
		System.out.println("\nName: " + this.getGivenName() + " " + this.getSurName() + "\n" +
						   "Age: " + this.getAge() + "  " + "Gender: " + this.getGender() + "\n" +
						   "EMail: " + this.getEmail() + "\n" + 
						   "Phone: " + this.getPhone() + "\n" +
						   "Address: " + this.getAddress());
	}

	public void printEasternName(){
		System.out.println("\nName: " + this.getSurName() + " " + this.getGivenName() + "\n" +
						   "Age: " + this.getAge() + "  " + "Gender: " + this.getGender() + "\n" +
						   "EMail: " + this.getEmail() + "\n" + 
						   "Phone: " + this.getPhone() + "\n" +
						   "Address: " + this.getAddress());
	}

	public String printCustom(Function <Person, String> f) {
		return f.apply(this);
	}

	public String getGivenName() {
		return givenName;
	}

	public String getSurName() {
		return surName;
	}

	public int getAge() {
		return age;
	}

	public Gender getGender() {
		return gender;
	}

	public String getEmail() {
		return eMail;
	}

	public String getPhone() {
		return phone;
	}

	public String getAddress() {
		return address;
	}

	public static List<Person> createShortList() {
		List<Person> people = new ArrayList<>();

		people.add(
			new Person.Builder()
			.givenName("Bob")
			.surName("Baker")
			.age(21)
			.gender(Gender.MALE)
			.email("bob.baker@example.com")
			.phoneNumber("201-121-4678")
			.address("44 4th St, Smallville, KS 12333")
			.build()
			);

		people.add(
			new Person.Builder()
			.givenName("Jane")
			.surName("Doe")
			.age(25)
			.gender(Gender.FEMALE)
			.email("jane.doe@example.com")
			.phoneNumber("202-123-4678")
			.address("33 3th St, Smallville, KS 12333")
			.build()
			);

		people.add(
			new Person.Builder()
			.givenName("John")
			.surName("Doe")
			.age(25)
			.gender(Gender.MALE)
			.email("john.doe@example.com")
			.phoneNumber("202-123-4678")
			.address("33 3th St, Smallville, KS 12333")
			.build()
			);
		return people;
	}

	public static class Builder {
		private String givenName;
		private String surName;
		private int age;
		private Gender gender;
		private String eMail;
		private String phone;
		private String address;

		public Person build() {
			Person p = new Person();
			p.givenName = givenName;
			p.surName = surName;
			p.age = age;
			p.gender = gender;
			p.eMail = eMail;
			p.phone = phone;
			p.address = address;
			return p;
		}

		public Builder givenName(String givenName) {
			this.givenName = givenName;
			return this;
		}

		public Builder surName(String surName) {
			this.surName = surName;
			return this;
		}

		public Builder age(int age) {
			this.age = age;
			return this;
		}

		public Builder gender(Gender gender) {
			this.gender = gender;
			return this;
		}

		public Builder email(String eMail) {
			this.eMail = eMail;
			return this;
		}

		public Builder phoneNumber(String phone) {
			this.phone = phone;
			return this;
		}

		public Builder address(String address) {
			this.address = address;
			return this;
		}
	}
}
