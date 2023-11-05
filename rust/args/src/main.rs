use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    dbg!(args);

    match env::current_dir() {
        Ok(cwd) => {
            println!("current dir: {:?}", cwd);
        },
        Err(e) => {
            println!("error: {}", e);
        }
    }

    for var in env::vars() {
        println!("var: {:?}", var);
    }

    for (key, value) in env::vars() {
        println!("{}: {}", key, value);
    }

    match env::var("PATH") {
        Ok(path) => println!("PATH: {}", path),
        Err(e) => println!("Error: {}", e)
    }

}
