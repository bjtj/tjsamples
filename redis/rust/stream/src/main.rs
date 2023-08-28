extern crate redis;
use redis::{
    streams::{StreamId, StreamKey, StreamReadOptions, StreamReadReply},
    Commands, Connection, RedisError, Value,
};

fn fetch_an_integer() -> redis::RedisResult<isize> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;
    let _: () = con.set("my_key", 42)?;
    con.get("my_key")
}

fn ping() -> redis::RedisResult<String> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;
    redis::cmd("PING").query(&mut con)
}

fn stream_test() {
    let client = redis::Client::open("redis://127.0.0.1/").unwrap();
    let mut con = client.get_connection().unwrap();

    for i in 0..10 {
        let ret: Result<String, RedisError> = con.xadd("mystream-rs", "*", &[("v", i.to_string())]);
        println!("{}", ret.unwrap());
    }

    let opts = StreamReadOptions::default().count(2);

    let ret: Result<StreamReadReply, RedisError> =
        con.xread_options(&["mystream-rs"], &["0"], &opts);

    if ret.is_ok() {
        println!("ok");
        for StreamKey { key, ids } in ret.unwrap().keys {
            println!("KEY: {}", key);

            for StreamId { id, map } in ids {
                println!(" - ID: {id}");
                for (n, s) in map {
                    if let Value::Data(bytes) = s {
                        println!(
                            "\t- name: {}, value: {}",
                            n,
                            String::from_utf8(bytes).expect("utf8")
                        );
                    }
                }
            }
        }
    } else {
        println!("not ok");
    }

    consume_stream(&mut con, "mystream-rs");

    let _: i64 = con.del("mystream-rs").expect("delete");

}

// consume stream
fn consume_stream(con: &mut Connection, stream_key: &str) {
    let mut last_id = String::from("0");

    loop {
        let opts = StreamReadOptions::default().count(2).block(300);
        let ret: Result<StreamReadReply, RedisError> =
            con.xread_options(&[stream_key], &[&last_id], &opts);


        if ret.is_err() {
            println!("{}", ret.err().unwrap());
            return;
        }

        let reply = ret.unwrap();

        if reply.keys.is_empty() {
            println!("empty");
            return;
        }

        for StreamKey { key, ids } in reply.keys {
            println!("KEY: {}", key);
            for StreamId { id, map } in ids {
                last_id = id.clone();
                println!("- ID - {}", id);
                for (n, s) in map {
                    if let Value::Data(bytes) = s {
                        println!("\t- name: {}, value: {}", n, String::from_utf8(bytes).expect("utf8"));
                    }
                }
            }
        }
    }
}

fn main() {
    let x = fetch_an_integer();
    println!("{}", x.unwrap());

    let ret = ping();
    println!("{}", ret.unwrap());

    stream_test();
}
