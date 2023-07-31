// The Rules of References
// 
//     At any given time, you can have either one mutable reference or any number of immutable references.
//     References must always be valid.


pub fn run() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);

    // let s = String::from("hello");
    // change(&s);

    let mut s = String::from("hello");
    change(&mut s);
    println!("{s}");            // hello, world

    allowing_multiple_mutable_refrences();

    various_references();

    // let reference_to_nothing = dangle();
    let x = no_dangle();
    println!("{x}");
}


fn calculate_length(s: &String) -> usize {
    s.len()
}

// fn change(some_string: &String) {
//     some_string.push_str(", world");
//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `some_string` is a `&` reference, so the data it refers to cannot be borrowed as mutable
// }


fn change(some_string: &mut String) {
    some_string.push_str(", world");
}


// fn two_mutable_references() {
//     let mut s = String::from("hello");
//     let r1 = &mut s;
//              ------ first mutable borrow occurs here
//     let r2 = &mut s;
//              ^^^^^^ second mutable borrow occurs here

//     println!("{}, {}", r1, r2);
// }


fn allowing_multiple_mutable_refrences() {
    let mut s = String::from("hello");
    {
        let r1 = &mut s;
    }
    let r2 = &mut s;
}


fn various_references() {
    let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    println!("{} and {}", r1, r2);
    // variables r1 and r2 will not be used after this point

    let r3 = &mut s; // no problem
    println!("{}", r3);
}


// fn dangle() -> &String {
//                ^ expected named lifetime parameter
//     let s = String::from("hello");
//     &s
// }

fn no_dangle() -> String {
    let s = String::from("hello");
    s
}
