mod refrences_and_borrowing;
mod slice_type;

fn main() {
    println!("Hello, world!");
    test();
    test2();
    test3();
    test_ownership_and_functions();
    test_return_values_and_scope();
    test_return_multiple_values_using_tuple();

    refrences_and_borrowing::run();
    slice_type::run();
}

fn test() {
    let x = 5;
    let y = x;

    println!("{}", x);
    println!("{}", y);
}

fn test2() {
    let s1 = String::from("hello");
    let s2 = s1;

    // println!("{s1}"); // <-- value borrowed here after move
    println!("{s2}");
}

fn test3() {
    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("s1 = {}, s2 = {}", s1, s2);
}

// ## Ownership and Functions ##

// -=- Listing 4-3: Functions with ownership and scope annotated -=-

fn test_ownership_and_functions() {
    let s = String::from("hello"); // s comes into scope

    takes_ownership(s); // s's value moves into the function...
                        // ... and so is no longer valid here

    let x = 5; // x comes into scope

    makes_copy(x); // x would move into the function,
                   // but i32 is Copy, so it's okay to still
                   // use x afterward
} // Here, x goes out of scope, then s. But because s's value was moved, nothing
  // special happens.

fn takes_ownership(some_string: String) {
    // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) {
    // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.



// ## Return Values and Scope ##

// -=- Listing 4-4: Transferring ownership of return values -=-

fn test_return_values_and_scope() {
    let s1 = gives_ownership(); // gives_ownership moves its return
                                // value into s1

    let s2 = String::from("hello"); // s2 comes into scope

    let s3 = takes_and_gives_back(s2); // s2 is moved into
                                       // takes_and_gives_back, which also
                                       // moves its return value into s3
} // Here, s3 goes out of scope and is dropped. s2 was moved, so nothing
  // happens. s1 goes out of scope and is dropped.

fn gives_ownership() -> String {
    // gives_ownership will move its
    // return value into the function
    // that calls it

    let some_string = String::from("yours"); // some_string comes into scope

    some_string // some_string is returned and
                // moves out to the calling
                // function
}

// This function takes a String and returns one
fn takes_and_gives_back(a_string: String) -> String {
    // a_string comes into
    // scope

    a_string // a_string is returned and moves out to the calling function
}



// -=- Listing 4-5: Returning ownership of parameters -=-

fn test_return_multiple_values_using_tuple() {
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{}' is {}.", s2, len);
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}
