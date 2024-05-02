fn main() {
    let str = "1234-5678";
    let slices = str.split("-");
    println!("{:?}", slices); // Split(SplitInternal { start: 0, end: 9, matcher: StrSearcher { haystack: "1234-5678", needle: "-", searcher: TwoWay(TwoWaySearcher { crit_pos: 0, crit_pos_back: 1, period: 1, byteset: 35184372088832, position: 0, end: 9, memory: 0, memory_back: 1 }) }, allow_trailing_empty: true, finished: false })
    let vec = slices.collect::<Vec<&str>>();
    println!("{:?}", vec);      // ["1234", "5678"]
    println!("{:?}", vec[0]);   // "1234"

    let num = vec[0].parse::<i32>().unwrap();
    println!("{:?}", num);      // 1234

    println!("{:?}", num / 1000); // 1
}
