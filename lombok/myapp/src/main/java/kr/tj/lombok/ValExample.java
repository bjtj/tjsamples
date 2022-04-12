package kr.tj.lombok;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import lombok.val;

public class ValExample {

  public String example() {
    val example = new ArrayList<String>();
    example.add("Hello, World!");
    val foo = example.get(0);
    return foo.toLowerCase();
  }

  public void example2() {
    final HashMap<Integer, String> map = new HashMap<Integer, String>();
    map.put(0, "zero");
    map.put(5, "five");
    for (final Map.Entry<Integer, String> entry : map.entrySet()) {
      System.out.printf("%d: %s\n", entry.getKey(), entry.getValue());
    }
  }

  public static void main(String[] args) {

  }
}
