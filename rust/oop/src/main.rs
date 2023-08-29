mod basic;
use basic::basic;

mod gui;
use gui::{Button, Screen};
use gui::Draw;

struct SelectBox {
    width: u32,
    height: u32,
    options: Vec<String>,
}

impl Draw for SelectBox {
    fn draw(&self) {
        // code to actually draw a select box
        println!("draw select box (width: {}, height: {})", self.width, self.height);
        for option in self.options.iter() {
            println!(" - option: {}", option);
        }
    }
}


fn main() {
    basic();

    let screen = Screen {
        components: vec![
            Box::new(SelectBox {
                width: 75,
                height: 10,
                options: vec![
                    String::from("Yes"),
                    String::from("Maybe"),
                    String::from("No"),
                ],
            }),
            Box::new(Button {
                width: 50,
                height: 10,
                label: String::from("OK"),
            }),
        ],
    };

    screen.run();
}
