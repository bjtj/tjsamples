package kr.tj.lombok;

import java.io.UnsupportedEncodingException;
import lombok.SneakyThrows;

// https://projectlombok.org/features/SneakyThrows

public class SneakyThrowsExample {
  @SneakyThrows(UnsupportedEncodingException.class)
  public String utf8ToString(byte[] bytes) {
    return new String(bytes, "UTF-8");
  }

  @SneakyThrows
  public void run() {
    throw new Throwable();
  }
}
