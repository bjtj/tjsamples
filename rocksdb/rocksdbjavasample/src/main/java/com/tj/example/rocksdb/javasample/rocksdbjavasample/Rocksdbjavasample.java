package com.tj.example.rocksdb.javasample.rocksdbjavasample;

import org.rocksdb.Options;
import org.rocksdb.RocksDB;
import org.rocksdb.RocksDBException;

public class Rocksdbjavasample {

    static {
        RocksDB.loadLibrary();
    }

    public static void main(String[] args) {
        
        String db_path = "mydb";
        
        Options options = new Options();
        options.setCreateIfMissing(true);
        
        try (final RocksDB db = RocksDB.open(options, db_path)) {
            db.put("person1".getBytes(), "Steve".getBytes());
            System.out.printf("%s\n", new String(db.get("person1".getBytes())));
        } catch(final RocksDBException e) {
            e.printStackTrace();
        }
    }
}
