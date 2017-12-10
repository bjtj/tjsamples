import java.util.*;
import java.util.concurrent.*;

class UseExecutor {
	
	public static void main(String args[]) throws Exception {
		ExecutorService executorService = Executors.newFixedThreadPool(4);
		executorService.execute(new Runnable() {
				public void run() {
					try {
						Thread.sleep(1000);
					} catch (Exception e) {
						e.printStackTrace();
					}
					System.out.println("hello");
				}
			});
		Future future = executorService.submit(new Callable() {
				public Object call() {
					try {
						Thread.sleep(500);
					} catch (Exception e) {
						e.printStackTrace();
					}
					System.out.println("call!");
					return "done!";
				}
			});
		Future future2 = executorService.submit(new Callable() {
				public Object call() {
					try {
						Thread.sleep(500);
					} catch (Exception e) {
						e.printStackTrace();
					}
					System.out.println("call! - cancel!");
					return "done!";
				}
			});
		System.out.println("future.get() = " + future.get());
		future2.cancel(true);
		System.out.println("shutdown");
		executorService.shutdown();
	}
}
