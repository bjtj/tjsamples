pub fn run() {
    store_result_and_clear();
    string_slices();
    range_syntax();
    range_syntax_trailing_number();
    range_syntax_entire_string();

    let s = String::from("hello world");
    let word = first_word_slice(&s);
    println!("{word}");

    // let mut s = String::from("hello world");
    // let word = first_word_slice(&s);
    // s.clear();
    // ^^^^^^^^^ mutable borrow occurs here
    // println!("the first word is: {}", word);

    string_literals_as_slices();
    other_slices();
}

fn first_word(s: &String) -> usize {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return i;
        }
    }

    s.len()
}

fn store_result_and_clear() {
    println!("== STORE RESULT AND CLEAR ==");
    
    let mut s = String::from("hello world");

    let word = first_word(&s); // word will get the value 5

    println!("'{}'", word);

    s.clear(); // this empties the String, making it equal to ""

    println!("'{}'", s);

    // word still has the value 5 here, but there's no more string that
    // we could meaningfully use the value 5 with. word is now totally invalid!
}


fn string_slices() {
    println!("== STRING SLICES ==");
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    println!("{hello}");
    println!("{world}");
}

fn range_syntax() {
    println!("== RANGE SYNTAX ==");
    let s = String::from("hello");
    let slice = &s[0..2];
    println!("&s[0..2] -> {}", slice);
    let slice = &s[..2];
    println!("&s[..2] -> {}", slice);
}

fn range_syntax_trailing_number() {
    println!("== RANGE SYNTAX TRAILING NUMBER ==");
    let s = String::from("hello");
    let len = s.len();
    let slice = &s[3..len];
    println!("&s[3..len] -> {}", slice);
    let slice = &s[3..];
    println!("&s[3..] -> {}", slice);
}

fn range_syntax_entire_string() {
    println!("== RANGE SYNTAX ENTIRE STRING ==");
    let s = String::from("hello");
    let len = s.len();
    let slice = &s[0..len];
    println!("&s[0..len] -> {}", slice);
    let slice = &s[..];
    println!("&s[..] -> {}", slice);
}


fn first_word_slice(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}

fn first_word_slice_rustacean(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}

fn string_literals_as_slices() {
    println!("== STRING LIERALS ==");
    let my_string = String::from("hello world");
    let word = first_word_slice_rustacean(&my_string[0..6]);
    println!("{}", word);       // hello
    let word = first_word_slice_rustacean(&my_string[..]);
    println!("{}", word);       // hello
    let word = first_word_slice_rustacean(&my_string);
    println!("{}", word);       // hello
    let my_string_literal = "hello world";
    let word = first_word_slice_rustacean(&my_string_literal[0..6]);
    println!("{}", word);       // hello
    let word = first_word_slice_rustacean(&my_string_literal[..]);
    println!("{}", word);       // hello
    let word = first_word_slice_rustacean(my_string_literal);
    println!("{}", word);       // hello
}


fn other_slices() {
    println!("== OTHER SLICES ==");
    let a = [1,2,3,4,5];
    let slice = &a[1..3];
    assert_eq!(slice, &[2,3]);
}
