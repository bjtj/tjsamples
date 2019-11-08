import java.lang.reflect.*;

class Main {
	public static void main(String args[]) throws ClassNotFoundException,
		NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException {

		System.out.println("-- loading com.myapp.Hello : begin --");
		Class<?> cls = Class.forName("com.myapp.Hello");
		System.out.println("-- loading com.myapp.Hello : done --");
		
		System.out.println("Class : " + cls.getName());
		System.out.println("Package : " + cls.getPackage());

		Method method = cls.getMethod("hello");
		method.invoke(cls.newInstance());
	}
}
