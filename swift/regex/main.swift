import Foundation

extension String {
    public var fullRange: NSRange {
        return NSRange(location: 0, length: self.count)
    }
}

@discardableResult func testMatch(pattern: String, str: String) -> Bool {
    let reg = try! NSRegularExpression(pattern: pattern, options: [])
    let matches = reg.matches(in: str, options: [], range: str.fullRange)
    print(matches)
    return matches.isEmpty == false
}

print(testMatch(pattern: "he.+o", str: "hello"))
print(testMatch(pattern: "he.+o", str: "abc"))
