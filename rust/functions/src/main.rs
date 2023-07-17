fn main() {
    println!("Hello, world!");
    another_function();
    another_function2(5);
    print_labeled_measurement(5, 'h');
    expression();
    let x = five();
    println!("The value of x is: {x}");
    let x = plus_one(5);
    println!("The value of x is: {x}");
}

fn another_function() {
    println!("Another function.");
}

fn another_function2(x: i32) {
    println!("The value of x is: {x}");
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}

fn expression() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {y}");
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}

// fn plus_one_compile_error(x: i32) -> i32 {
//     x + 1;
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Compiling functions v0.1.0 (C:\dev\git\tjsamples\rust\functions)
// error[E0308]: mismatched types
//   --> src\main.rs:42:30
//    |
// 42 | fn plus_one_error(x: i32) -> i32 {
//    |    --------------            ^^^ expected `i32`, found `()`
//    |    |
//    |    implicitly returns `()` as its body has no tail or `return` expression
// 43 |     x + 1;
//    |          - help: remove this semicolon

// For more information about this error, try `rustc --explain E0308`.
// error: could not compile `functions` due to previous error