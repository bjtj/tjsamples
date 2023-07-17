fn main() {
    if_statement();
    // infinite_loop_statement();
    loop_statement();
}

fn if_statement() {
    // -------------------------------------------------

    let number = 3;
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    // -------------------------------------------------

    // let number = 3;
    // if number {
    //     println!("number was three");
    // }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Compiling control-flow v0.1.0 (C:\dev\git\tjsamples\rust\control-flow)
    // error[E0308]: mismatched types
    //   --> src\main.rs:12:8
    //    |
    // 12 |     if number {
    //    |        ^^^^^^ expected `bool`, found integer

    // For more information about this error, try `rustc --explain E0308`.
    // error: could not compile `control-flow` due to previous error

    // -------------------------------------------------

    let number = 3;
    if number != 0 {
        println!("number was something other than zero");
    }

    // -------------------------------------------------

    let number = 6;
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // -------------------------------------------------

    let condition = true;
    let number = if condition { 5 } else { 6 };
    println!("The value of number is: {number}");

    // -------------------------------------------------

    // let condition = true;
    // let number = if condition { 5 } else { "six" };
    // println!("The value of number is: {number}");
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Compiling control-flow v0.1.0 (C:\dev\git\tjsamples\rust\control-flow)
    // error[E0308]: `if` and `else` have incompatible types
    //   --> src\main.rs:49:44
    //    |
    // 49 |     let number = if condition { 5 } else { "six" };
    //    |                                 -          ^^^^^ expected integer, found `&str`
    //    |                                 |
    //    |                                 expected because of this

    // For more information about this error, try `rustc --explain E0308`.
    // error: could not compile `control-flow` due to previous error
}

fn infinite_loop_statement() {
    loop {
        println!("again!");
    }
}

fn loop_statement() {
    // Returning Values from Loops

    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;
        }
    };
    println!("The result is {result}");

    // Loop Labels to Disambiguate Between Multiple Loops

    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");

    // Conditional Loops with while

    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");

    // Looping Through a Collection with for

    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("the value is: {}", a[index]);

        index += 1;
    }

    // concise alternative...

    let a = [10, 20, 30, 40, 50];
    for element in a {
        println!("the value is: {element}");
    }

    // reverse...

    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
