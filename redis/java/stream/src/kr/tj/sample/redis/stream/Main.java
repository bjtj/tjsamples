package kr.tj.sample.redis.stream;

import org.redisson.Redisson;
import org.redisson.api.RStream;
import org.redisson.api.RedissonClient;
import org.redisson.api.StreamMessageId;
import org.redisson.api.stream.StreamAddArgs;
import org.redisson.api.stream.StreamReadGroupArgs;

import java.io.Serializable;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        RedissonClient client = Redisson.create();

        testSimple(client);
        testComplex(client);

        client.shutdown();
    }

    private static void testSimple(RedissonClient client) {
        RStream<String, String> stream = client.getStream("test");

        StreamMessageId sm = stream.add(StreamAddArgs.entry("0", "0"));

        stream.removeGroup("testGroup");
        stream.createGroup("testGroup");

        StreamMessageId id1 = stream.add(StreamAddArgs.entry("1", "1"));
        StreamMessageId id2 = stream.add(StreamAddArgs.entry("2", "2"));

        Map<StreamMessageId, Map<String, String>> group = stream.readGroup("testGroup", "consumer1", StreamReadGroupArgs.neverDelivered());
        long amount = stream.ack("testGroup", id1, id2);

        System.out.println(amount);
    }

    private static void testComplex(RedissonClient client) {
        RStream<String, MyData> stream = client.getStream("testcomplex");

        byte[] arr = new byte[10];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = (byte)i;
        }
        StreamMessageId sm = stream.add(StreamAddArgs.entry("0", new MyData("v1", arr)));

        stream.removeGroup("testComplexGroup");
        stream.createGroup("testComplexGroup");

        StreamMessageId id1 = stream.add(StreamAddArgs.entry("1", new MyData("v1", arr)));
        StreamMessageId id2 = stream.add(StreamAddArgs.entry("2", new MyData("v1", arr)));

        Map<StreamMessageId, Map<String, MyData>> group = stream.readGroup("testComplexGroup", "consumer1", StreamReadGroupArgs.neverDelivered());
        long amount = stream.ack("testComplexGroup", id1, id2);

        System.out.println(amount);
    }

    static class MyData implements Serializable {
        private String strValue1;
        private byte[] binaryValue1;

        public MyData(String strValue1, byte[] binaryValue1) {
            this.strValue1 = strValue1;
            this.binaryValue1 = binaryValue1;
        }

        public String getStrValue1() {
            return strValue1;
        }

        public void setStrValue1(String strValue1) {
            this.strValue1 = strValue1;
        }

        public byte[] getBinaryValue1() {
            return binaryValue1;
        }

        public void setBinaryValue1(byte[] binaryValue1) {
            this.binaryValue1 = binaryValue1;
        }
    }
}
