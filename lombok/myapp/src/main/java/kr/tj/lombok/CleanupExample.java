package kr.tj.lombok;

import lombok.Cleanup;
import java.io.*;

// You can use `@Cleanup` to ensure a given resource is automatically cleaned up before
// the code execution path exits your current scope. You do this by annotating any
// local variable declaration with the `@Cleanup` annotation like so:
// ```
// @Cleanup InputStream in = new FileInputStream("some/file");
// ```

public class CleanupExample {

  public static void main(String[] args) throws IOException {
    @Cleanup InputStream in = new FileInputStream(args[0]);
    @Cleanup OutputStream out = new FileOutputStream(args[1]);
    byte[] b = new byte[10000];
    while (true) {
      int r = in.read(b);
      if (r == -1) break;
      out.write(b, 0, r);
    }
  }
}
