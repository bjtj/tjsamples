fn main() {
    println!("Hello, world!");
    _sample_1();
    _sample_2();
    _sample_3();
}

fn _sample_1() {
    let guess: u32 = "42".parse().expect("Not a number!");

    // let guess = "42".parse().expect("Not a number!");
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // $ cargo build
    // Compiling datatypes v0.1.0 (C:\dev\git\tjsamples\rust\datatypes)
    // error[E0282]: type annotations needed
    //   --> src\main.rs:10:9
    //    |
    // 10 |     let guess = "42".parse().expect("Not a number!");
    //    |         ^^^^^
    //    |
    // help: consider giving `guess` an explicit type
    //    |
    // 10 |     let guess: _ = "42".parse().expect("Not a number!");
    //    |              +++

    // For more information about this error, try `rustc --explain E0282`.
    // error: could not compile `datatypes` due to previous error
}

fn _sample_2() {
    // Scalar Types
    // ============

    // integer types
    {
        let Decimal = 98_222;
        let Hex = 0xff;
        let Octal = 0o77;
        let Binary = 0b1111_0000;
        let Byte = b'A';
    }

    // floating-point types
    {
        let x = 2.0; // f64
        let y: f32 = 3.0; // f32
    }

    // numeric operations
    {
        // addition
        let sum = 5 + 10;

        // subtraction
        let difference = 95.5 - 4.3;

        // multiplication
        let product = 4 * 30;

        // division
        let quotient = 56.7 / 32.2;
        let truncated = -5 / 3; // Results in -1

        // remainder
        let remainder = 43 % 5;
    }

    // boolean type
    {
        let t = true;
        let f: bool = false; // with explicit type annotation
    }

    // character type
    {
        let c = 'z';
        let z: char = 'ℤ'; // with explicit type annotation
        let heart_eyed_cat = '😻';
    }
}

fn _sample_3() {
    // Compound Types
    // ==============

    // tuple
    {
        let tup: (i32, f64, u8) = (500, 6.4, 1);
    }

    {
        let tup = (500, 6.4, 1);
        let (x, y, z) = tup;
        println!("The value of y is: {y}");
    }

    {
        let x: (i32, f64, u8) = (500, 6.4, 1);
        let five_hundred = x.0;
        let six_point_four = x.1;
        let one = x.2;
    }

    // array
    let a = [1, 2, 3, 4, 5];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let a: [i32; 5] = [1, 2, 3, 4, 5];

    let a = [3; 5];

    // Accessing Array Elements

    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];

    // Invalid Array Element Access

    use std::io;

    {
        let a = [1, 2, 3, 4, 5];

        println!("Please enter an array index.");

        let mut index = String::new();

        io::stdin()
            .read_line(&mut index)
            .expect("Failed to read line");

        let index: usize = index
            .trim()
            .parse()
            .expect("Index entered was not a number");

        let element = a[index];

        println!("The value of the element at index {index} is: {element}");
    }
}
