const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

fn main() {
    // let x = 5;
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
    println!("constant value - THREE_HOURS_IN_SECONDS: {THREE_HOURS_IN_SECONDS}");

    shadowing();
    _shadowing();
}


fn shadowing() {
    println!("=== shadowing ===");
    let x = 5;
    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }
    println!("The value of x is: {x}");
}

fn _shadowing() {
    let spaces = "   ";
    let spaces = spaces.len();
    println!("spaces: {spaces}");
}


// fn _shadowing_compile_error() {
//     let mut spaces = "   ";
//     spaces = spaces.len();
//     println!("spaces: {spaces}");
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// error[E0308]: mismatched types
//   --> src/main.rs:36:14
//    |
// 35 |     let mut spaces = "   ";
//    |                      ----- expected due to this value
// 36 |     spaces = spaces.len();
//    |              ^^^^^^^^^^^^ expected `&str`, found `usize`
