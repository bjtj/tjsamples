import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.Iterator;

class Main {
	public static void main(String args[]) {

		System.out.println("[ArrayList]");
		{
			List<String> list = new ArrayList<>();
			list.add("hello");
			list.add("world");
			for (String str : list) {
				System.out.println(str);
			}
		}

		System.out.println("[HashMap]");
		{
			Map<String, String> map = new HashMap<>();
			map.put("name", "steve");
			map.put("age", "28");
			map.put("class", "A");
			Iterator<String> keys = map.keySet().iterator();
			while (keys.hasNext()) {
				String key = keys.next();
				System.out.println(key + ":" + map.get(key));
			}
		}

		System.out.println("[LinkedHashMap]");
		{
			Map<String, String> map = new LinkedHashMap<>();
			map.put("name", "steve");
			map.put("age", "28");
			map.put("class", "A");
			Iterator<String> keys = map.keySet().iterator();
			while (keys.hasNext()) {
				String key = keys.next();
				System.out.println(key + ":" + map.get(key));
			}
		}

		System.out.println("[HashSet]");
		{
			Set<String> set = new HashSet<>();
			set.add("a");
			set.add("a");
			set.add("A");
			set.add("b");
			Iterator<String> elements = set.iterator();
			while (elements.hasNext()) {
				String element = elements.next();
				System.out.println(element);
			}
		}
	}
}
