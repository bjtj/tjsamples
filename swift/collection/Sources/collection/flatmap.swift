import Foundation

class X {
    let array: [String]

    init (_ array: [String]) {
        self.array = array
    }
}

func main() {

    let list = [X(["a", "b", "c"]), X(["b", "c", "d"])]

    let result = list.flatMap {
        $0.array
    }

    print(result)               // ["a", "b", "c", "b", "c", "d"]
    print(Set(result))          // ["d", "a", "b", "c"]

}
