extern crate redis;
use redis::{
    Commands,
};

use std::sync::{Arc,Mutex};
use std::thread;
use std::time::Duration;


fn subscribe(done: &Arc<Mutex<bool>>) {
    let client = redis::Client::open("redis://127.0.0.1/").unwrap();
    let mut con = client.get_connection().unwrap();
    let mut pubsub = con.as_pubsub();
    pubsub.subscribe("channel_1").unwrap();
    pubsub.subscribe("channel_2").unwrap();

    loop {
        if *done.lock().unwrap() == true {
            println!("DONE!");
            break;
        }
        let msg = pubsub.get_message().unwrap();
        let payload : String = msg.get_payload().unwrap();
        println!("channel '{}': {}", msg.get_channel_name(), payload);
    }
}

fn publish(channel: &str, data: &str) {
    let client = redis::Client::open("redis://127.0.0.1/").unwrap();
    let mut con = client.get_connection().unwrap();
    con.publish::<&str, &str, u8>(channel, data).expect("redis publish");
}

fn make_arc(flag: bool) -> Arc<Mutex<bool>> { // Just a function to make a Mutex in an Arc
    Arc::new(Mutex::new(flag))
}

fn new_clone(input: &Arc<Mutex<bool>>) -> Arc<Mutex<bool>> { // Just a function so we can write new_clone
    Arc::clone(&input)
}


fn pubsub() {

    let done = make_arc(false);
    let done_clone = new_clone(&done);

    let handle = thread::spawn(move || {
        subscribe(&done_clone);
    });

    for i in 0..5 {
        thread::sleep(Duration::from_millis(1000));
        publish("channel_1", &format!("[ch1] hello {}", i));
        publish("channel_2", &format!("[ch2] hello {}", i));
    }

    {
        let mut done_inside = done.lock().unwrap();
        *done_inside = true;
    }

    publish("channel_1", "done");
    handle.join().unwrap();
}

fn main() {
    pubsub();
}
