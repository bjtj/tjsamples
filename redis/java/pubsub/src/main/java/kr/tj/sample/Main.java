package kr.tj.sample;

import java.util.Iterator;
import org.redisson.Redisson;
import org.redisson.api.RBucket;
import org.redisson.api.RKeys;
import org.redisson.api.RedissonClient;
import org.redisson.api.listener.MessageListener;
import org.redisson.client.codec.StringCodec;
import org.redisson.config.Config;

public class Main {

  public static void main(String[] args) {

    // 1. Create config object
    Config config = new Config();
    config.useSingleServer()
      .setAddress("redis://localhost:6379");

    // 2. Create Redisson instance

    // Sync and Async API
    RedissonClient redisson = Redisson.create(config);

    RKeys rkeys = redisson.getKeys();
    Iterator<String> ikeys = rkeys.getKeys().iterator();
    while (ikeys.hasNext()) {
      String key = ikeys.next();
      System.out.println("key: " + key);
    }

    redisson.getBucket("msg", new StringCodec()).unlink();

    printMsg(redisson);

    redisson.getBucket("msg", new StringCodec()).set("hello");

    printMsg(redisson);


    // pub/sub
    // ========
    // https://redisson.org/glossary/pubsub.html

    redisson.getTopic("mytopic").addListener(String.class, new MessageListener<String>() {
      @Override
      public void onMessage(CharSequence channel, String s) {
        System.out.println("[" + channel + "] on message: " + s);
      }
    });

    redisson.getTopic("mytopic").publish("hello~");

    System.out.println("Done");

    redisson.shutdown();
  }

  private static void printMsg(RedissonClient redisson) {
    RBucket<Object> bucket = redisson.getBucket("msg", new StringCodec());
    if (bucket.isExists()) {
      String value = bucket.get().toString();
      System.out.println("msg: " + value);
    } else {
      System.out.println("<'msg' does not exist>");
    }
  }
}
