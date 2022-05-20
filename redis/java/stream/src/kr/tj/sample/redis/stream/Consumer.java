package kr.tj.sample.redis.stream;

import org.redisson.Redisson;
import org.redisson.api.RStream;
import org.redisson.api.RedissonClient;
import org.redisson.api.StreamMessageId;
import org.redisson.api.stream.StreamReadArgs;

import java.util.Iterator;
import java.util.Map;

public class Consumer {
    public static void main(String[] args) {
        RedissonClient client = Redisson.create();
        RStream<String, MyStreamData> stream = client.getStream("mystream");

        while (true) {
            Map<StreamMessageId, Map<String, MyStreamData>> messages = stream.read(StreamReadArgs.greaterThan(StreamMessageId.MIN));
            System.out.println(messages.size());
            Iterator<StreamMessageId> keys = messages.keySet().iterator();
            while (keys.hasNext()) {
                StreamMessageId key = keys.next();
                System.out.println(key);
            }
        }

//        client.shutdown();
    }
}
