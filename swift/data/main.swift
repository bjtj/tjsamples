import Foundation

func main() {

    
    guard let data = "hello world".data(using: .utf8) else {
        exit(1)
    }

    print("count: \(data.count)")

    print("first: \(data[0])")

    print("loop")
    for d in data {
        print(d)
    }


    print("\(data.subdata(in: 0..<2).map {"\($0)"} )") // ["104", "101"]
    print("\(data.subdata(in: 2..<7).map {"\($0)"} )") // ["108", "108", "111", "32", "119"]
    print(String(data: data.subdata(in: 2..<7), encoding: .utf8)!) // llo w

    // ----------------------

    guard let data = "line1\r\nline2\r\n".data(using: .utf8) else {
        print("ERROR!")
        return
    }

    if let range = data.range(of: "\r\n".data(using: .utf8)!) {
        print(range)            // 5..<7
    }
    
    if let range = data.range(of: "xx".data(using: .utf8)!) {
        print(range)            // (nil)
    }

    print(data[data.endIndex-2..<data.endIndex].map {"[\($0)]"})

    print(data[data.endIndex-2..<data.endIndex] == "\r\n".data(using: .utf8))

    // if let str = String(data: data[data.endIndex-4..<data.endIndex], encoding: .utf8) {
    //     print("'\(str.map { "[\($0)]" })'")
    // }
}

main()
