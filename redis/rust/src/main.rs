extern crate redis;
use redis::Commands;

fn fetch_an_integer() -> redis::RedisResult<isize> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;
    let _ : () = con.set("my_key", 42)?;
    con.get("my_key")
}


fn ping() -> redis::RedisResult<String> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;
    redis::cmd("PING").query(&mut con)
}


fn main() {

    let x = fetch_an_integer();
    println!("{}", x.unwrap());

    let ret = ping();
    println!("{}", ret.unwrap());
}

