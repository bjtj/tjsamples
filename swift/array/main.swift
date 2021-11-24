import Foundation

func main() {
    var arr = [String]()

    for i in 0..<20 {
        arr.append("\(i)")
    }

    print("arr")
    print(arr)

    arr.remove(at: 2)

    print("remove(at: 2)")
    print(arr)


    // https://developer.apple.com/documentation/swift/array/1688499-sort
    
    arr.sort()

    print("sort()")
    print(arr)
    print("sorted(by: >)")
    print(arr.sorted(by: >))
    print("arr")
    print(arr)

    print("-----")

    arr.sort(by: >)

    print(arr)

    print(arr.reversed())

    func comp(_ a: String, _ b: String) -> Bool {
        if let x = Int(a), let y = Int(b) {
            return x < y
        }
        return a < b
    }
    arr.sort(by: comp)
    print(arr)

    arr.insert("hi", at: 2)

    print("insert(\"hi\", at: 2)")
    print(arr)

    print("sorted(by: comp)")
    print(arr.sorted(by: comp))

    func comp_reverse(_ a: String, _ b: String) -> Bool {
        if let x = Int(a), let y = Int(b) {
            return x > y
        }
        return a > b
    }

    print("sorted(by: comp_reverse)")
    print(arr.sorted(by: comp_reverse))
}

main()
