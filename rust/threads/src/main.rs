use std::thread;
use std::time::Duration;

mod messsage_passing;
mod shared_state;

fn test1() {
    println!("---- test1 ----");
    thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
}


fn test2() {
    println!("---- test2 ----");
    let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("hi number {} from the main thread!", i);
        thread::sleep(Duration::from_millis(1));
    }

    handle.join().unwrap();
}

fn test3() {
    println!("---- test3 ----");
    let v = vec![1, 2, 3];

    let handle = thread::spawn(move || {
        println!("Here's a vector: {:?}", v);
    });

    handle.join().unwrap();
}

fn main() {
    test1();

    thread::sleep(Duration::from_millis(1000));
    
    test2();

    test3();

    // messsage_passing::test_mpsc1();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: SendError { .. }', src\messsage_passing.rs:9:22
    // note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

    messsage_passing::test_mpsc2();

    messsage_passing::test_mpsc3();

    messsage_passing::test_mpsc4();

    shared_state::test_shared_state1();

    shared_state::test_shared_state2();
}
