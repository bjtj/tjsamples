fn main() {
    let mut v = vec![1,2,3];

    for i in &v {
        println!("{}", i);
    }

    print_vec(&v);

    v.extend([4,5,6]);
    print_vec(&v);

    v.push(10);
    print_vec(&v);
    
    let v2 = v.iter().map(|&i| {
        return format!("num: {}", i);
    }).collect();

    print_vec(&v2);

    {
        let mut v2 = v2.clone();
        v2.reverse();
        print_vec(&v2);
    }

    print_vec(&v2);
    
}

// https://stackoverflow.com/a/30697502/5676460
fn print_vec<T>(v: &Vec<T>) where T: std::fmt::Display {
    println!("v.len(): {}", v.len());
    for i in v {
        println!("{}", i);
    }
}
