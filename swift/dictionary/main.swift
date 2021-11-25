import Foundation


func main() {
    var x = [String:String]()
    x["a"] = "A"
    x["b"] = "B"
    x["c"] = "C"
    x["d"] = "D"
    x["e"] = "E"
    x["f"] = "F"
    x["g"] = "G"
    x["h"] = "H"

    print(x.filter {
              $0.key == "a"
          })

    // print("a".caseInsensitiveCompare("A"))

    if let item = x.first(where: { $0.key.caseInsensitiveCompare("A") == .orderedSame }) {
        print(item)
    }

    // if let idx = x.index(where: { $0.key.caseInsensitiveCompare("A") == .orderedSame }) {
    //     print(idx)
    // }

    print(x)
}

main()
