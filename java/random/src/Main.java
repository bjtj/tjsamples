import java.util.*;

class Main {
    public static void main(String args[]) {

	List<Integer> list = new ArrayList<>();
	for (int i = 0; i < 1000; i++) {
	    list.add(i+1);
	}
	Collections.shuffle(list);
	for (int i = 0; i < list.size(); i++) {
	    Integer num = list.get(i);
	    System.out.printf("[%d] %d\n", i, num);
	}

    }
}
