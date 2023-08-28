
fn main() {
    let my_string:String = "42".to_string();
    let my_int:i32 = my_string.parse::<i32>().unwrap();
    println!("parseed: {}", my_int);
}


