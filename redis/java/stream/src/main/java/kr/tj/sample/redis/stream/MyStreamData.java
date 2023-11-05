package kr.tj.sample.redis.stream;

import java.io.Serializable;

public class MyStreamData implements Serializable {
    private String key;
    private byte[] data;

    public MyStreamData(String key, byte[] data) {
        this.key = key;
        this.data = data;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
