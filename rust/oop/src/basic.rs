pub struct AveragedCollection {
    list: Vec<i32>,
    average: f64,
}

impl AveragedCollection {
    pub fn add(&mut self, value: i32) {
        self.list.push(value);
        self.update_average();
    }

    pub fn remove(&mut self) -> Option<i32> {
        let result = self.list.pop();
        match result {
            Some(value) => {
                self.update_average();
                Some(value)
            }
            None => None,
        }
    }

    pub fn average(&self) -> f64 {
        self.average
    }

    fn update_average(&mut self) {
        let total: i32 = self.list.iter().sum();
        self.average = total as f64 / self.list.len() as f64;
    }
}

pub fn basic() {
    let mut ac = AveragedCollection {
        list: vec![1,2,3],
        average: 24.3,
    };

    println!("average - {}", ac.average());
    ac.update_average();
    println!("average - {}", ac.average());
    ac.add(4);
    println!("average - {}", ac.average());
    ac.remove();
    println!("average - {}", ac.average());
    ac.remove();
    println!("average - {}", ac.average());
}
