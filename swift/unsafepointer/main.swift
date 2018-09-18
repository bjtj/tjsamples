import Foundation

// https://developer.apple.com/documentation/swift/unsafemutablepointer


print(" -- initialized memory --")
let ptr = UnsafeMutablePointer<Int>.allocate(capacity: 4)
ptr.initialize(repeating: 23, count: 4)
print(ptr.pointee)
print(ptr[0])
ptr.deallocate()


print(" -- accessing a poiner's memory as a different type --")
var bytes: [UInt8] = [39, 77, 111, 111, 102, 33, 39, 0]
let uint8Pointer = UnsafeMutablePointer<UInt8>.allocate(capacity: 8)
uint8Pointer.initialize(from: &bytes, count: 8)

print(uint8Pointer.pointee)
print(uint8Pointer[0])

// 
let length = uint8Pointer.withMemoryRebound(to: Int8.self, capacity: 8) {
    return strlen($0)
}
print(length)


// 
let uint64Pointer = UnsafeMutableRawPointer(uint8Pointer)
  .bindMemory(to: UInt64.self, capacity: 1)

print(uint64Pointer.pointee)    // full integer
print(uint8Pointer.pointee)     // first byte

// uint8Pointer.deallocate() -- corrupted double-linked list
uint64Pointer.deallocate()
// uint64Pointer.deallocate() -- corrupted double-linked list

print(" -- performing typed pointer arithmetic --")
let intPointer = UnsafeMutablePointer<Int>.allocate(capacity: 4)
var nums: [Int] = [10, 20, 30, 40]
intPointer.initialize(from: &nums, count: 4)
let x = intPointer.pointee
print(x)

let offsetPointer = intPointer + 2
let y = offsetPointer.pointee
print(y)

let z = intPointer[2]
print(z)


print(" -- implicit casting and bridging --")
func printInt(atAddress p: UnsafeMutablePointer<Int>) {
    print(p.pointee)
}

printInt(atAddress: intPointer)

var value: Int = 23
printInt(atAddress: &value)

var numbers = [5, 10, 15, 20]
printInt(atAddress: &numbers)

//
let arrPointer = UnsafeMutablePointer<Int>.allocate(capacity: 8)
arrPointer.initialize(repeating: 1, count: 8)

print("----")
for p in UnsafeBufferPointer(start: arrPointer, count: 8) {
    print(p)
}

arrPointer.assign(from: &nums, count: 4)

print("----")
for p in UnsafeBufferPointer(start: arrPointer, count: 8) {
    print(p)
}

(arrPointer+2).assign(from: &nums, count: 4)

print("----")
for p in UnsafeBufferPointer(start: arrPointer, count: 8) {
    print(p)
}

arrPointer.deallocate()
