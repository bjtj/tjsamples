import Foundation


func main() -> Void {
    let arr = [1, 2, 3, 4, 5, 6]

    print(arr)                  // [1, 2, 3, 4, 5, 6]


    print(arr.endIndex)         // 6
    print(arr.index(arr.endIndex, offsetBy: -1)) // 5
    print(arr.index(arr.endIndex, offsetBy: -2)) // 4
    print(arr.index(arr.endIndex, offsetBy: -10)) // -4

    print(arr[max(0, arr.index(arr.endIndex, offsetBy: -2))...]) // [5, 6]

    print(arr[max(0, arr.index(arr.endIndex, offsetBy: -10))...]) // [1, 2, 3, 4, 5, 6]

    print(arr[1..<2])           // [2]
    print(arr[1..<1])           // []
    print(arr[2..<4])           // [3, 4]
    // print(arr[4..<10])          // Swift/Array.swift:405: Fatal error: Array index is out of range
    print(arr[2..<arr.count])   // [3, 4, 5, 6]

    print(arr.suffix(3))        // [4, 5, 6]
    print(arr.suffix(4))        // [3, 4, 5, 6]
    print(arr.suffix(10))       // [1, 2, 3, 4, 5, 6]
}

main()
