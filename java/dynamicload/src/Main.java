import java.lang.reflect.*;

class Main {
	public static void main(String args[]) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException {
		Class<?> cls = Class.forName("com.myapp.Hello");
		System.out.println("Class : " + cls.getName());
		System.out.println("Package : " + cls.getPackage());

		Method method = cls.getMethod("hello");
		method.invoke(cls.newInstance());
	}
}
