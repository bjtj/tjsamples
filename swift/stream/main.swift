import Foundation

public class StringInputStream : InputStream {

    let text: String?
    var data: Data?
    var arr: [UInt8]?
    var readSize = 0

    public init(text: String?) {
        self.text = text
        self.data = text?.data(using: .utf8)
        self.arr = [UInt8](data!)

        super.init(data: data!)
    }

    override public func read(_ buffer: UnsafeMutablePointer<UInt8>, maxLength: Int) -> Int {
        let size = min(maxLength, data!.count - readSize)
        if size > 0 {
            buffer.assign(from: &arr! + readSize, count: size)
            readSize += size
        }
        return size
    }

    override public func getBuffer(_ buffer: UnsafeMutablePointer<UnsafeMutablePointer<UInt8>?>, length: UnsafeMutablePointer<Int>) -> Bool {
        return false
    }

    override public var hasBytesAvailable: Bool {
        get {
            return data!.count - readSize > 0
        }
    }
}


let stream = StringInputStream(text: "hello world")
// let stream = InputStream(data: "hello world".data(using: .utf8)!) -- not work

var data = Data()
let bufferSize = 1
let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)
while stream.hasBytesAvailable {
    let read = stream.read(buffer, maxLength: bufferSize)
    data.append(buffer, count: read)
}
buffer.deallocate()

print(data.map {"\($0)"})

