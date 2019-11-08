import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.Serializable;

class Main {

	public static class Employee implements Serializable {
		private int number;
		private String name;

		public int getNumber() {
			return number;
		}
		public void setNumber(int number) {
			this.number = number;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String toString() {
			return "Number: " + number + ", Name: " + name;
		}
	}
	
	public static void main(String args[]) throws Exception {

		Employee employee = new Employee();
		employee.setNumber(121212);
		employee.setName("Steve");
		
		FileOutputStream fout = new FileOutputStream("employee.out");
		ObjectOutputStream out = new ObjectOutputStream(fout);
		out.writeObject(employee);
		out.close();
		fout.close();

		FileInputStream fin = new FileInputStream("employee.out");
		ObjectInputStream in = new ObjectInputStream(fin);
		Employee employeeClone = (Employee)in.readObject();
		System.out.println(employeeClone.toString());
		in.close();
		fin.close();
	}
}
