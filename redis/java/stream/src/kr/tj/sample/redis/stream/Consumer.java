package kr.tj.sample.redis.stream;

import org.redisson.Redisson;
import org.redisson.api.RStream;
import org.redisson.api.RedissonClient;
import org.redisson.api.StreamMessageId;

import java.util.Iterator;
import java.util.Map;
import org.redisson.api.stream.StreamReadArgs;

public class Consumer {
    public static void main(String[] args) {
        RedissonClient client = Redisson.create();
        RStream<String, MyStreamData> stream = client.getStream("mystream");

        StreamMessageId queryid = StreamMessageId.ALL;

        while (true) {
            Map<StreamMessageId, Map<String, MyStreamData>> messages = stream.read(
              StreamReadArgs.greaterThan(queryid));
            Iterator<StreamMessageId> ids = messages.keySet().iterator();
            while (ids.hasNext()) {
                StreamMessageId id = ids.next();
                System.out.println(id);
                Map<String, MyStreamData> map = messages.get(id);
                for (String msgkey : map.keySet()) {
                    MyStreamData data = map.get(msgkey);
                    System.out.println(msgkey + " -- " + data.getKey() + ", " + data.getData().length);
                }
                queryid = id;
            }
        }

//        client.shutdown();
    }
}
