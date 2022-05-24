package kr.tj.sample.redis.stream;

import org.redisson.Redisson;
import org.redisson.api.RStream;
import org.redisson.api.RedissonClient;
import org.redisson.api.StreamMessageId;
import org.redisson.api.stream.StreamAddArgs;

public class Producer {

  public static void main(String[] args) throws InterruptedException {
    RedissonClient client = Redisson.create();
    RStream<String, MyStreamData> stream = client.getStream("mystream");

    int i = 0;
    while (true) {
      i++;
      String id = "key-" + i;
      MyStreamData data = new MyStreamData("val1", new byte[10]);
      StreamMessageId msgid = stream.add(StreamAddArgs.entry(id, data));
      System.out.println("ADD: " + id + " with " + msgid);
      Thread.sleep(1000);
    }
  }
}
