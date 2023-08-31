fn main() {
    println!("Hello, world!");

    let tup = (1,2,3);

    println!("tup.0: {}", tup.0);
    println!("tup.1: {}", tup.1);
    println!("tup.2: {}", tup.2);

    let s = format!("{:?}", tup);
    println!("tup: {}", s);

    println!("tup: {tup:?}");
}
