import Foundation

let data = "hello world".data(using: .utf8)

print("count: \(data!.count)")

print("first: \(data![0])")

print("loop")
for d in data! {
    print(d)
}


print("\(data!.subdata(in: 0..<2).map {"\($0)"} )")

print("\(data!.subdata(in: 2..<7).map {"\($0)"} )")
