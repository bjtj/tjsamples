import Foundation

// compare

print("hello".compare("hello") == .orderedSame)
print("hello".caseInsensitiveCompare("hello") == .orderedSame)
print("hello".compare("HELLO") == ComparisonResult.orderedSame)
print("hello".caseInsensitiveCompare("HELLO") == ComparisonResult.orderedSame)


// start with
print("hello world".hasPrefix("hello"))


// data to string
var data = "hello world".data(using: .utf8)
print(String(data: data!, encoding: .utf8)!)


// contains
var string = "hello swift"

if string.range(of:"Swift") != nil {
    print("exists - Swift")
}

if string.range(of:"swift") != nil {
    print("exists - swift")
}


// upper
print(string.uppercased())

// lower
print(string.lowercased())

// capitalize or title
print(string.capitalized(with: nil))

// trim
print("  trim  ".trimmingCharacters(in: .whitespacesAndNewlines))

// split
let arr = "hello world".components(separatedBy: " ")
print(arr)

print("location: http://example.com".components(separatedBy: ":"))
// ["location", " http", "//example.com"]

print("location: http://example.com".components(separatedBy: ": "))
// ["location", "http://example.com"]

print("location: http://example.com".split(separator: ":", maxSplits: 1))
print("location: http://example.com".split(separator: ":", maxSplits: 1)
        .map {$0.trimmingCharacters(in: .whitespacesAndNewlines)})

print("   a b    c d ".split(separator: " ", maxSplits: 2))
print("   a b    c d ".split(separator: " "))

// split lines
let lines = "line1\nline2\nline3\n"
print(lines.components(separatedBy: "\n"))


print("line1\nline2\nline3\n\n".components(separatedBy: "\n"))

// is empty
if "".isEmpty {
    print("empty string")
}

let str: String? = nil
print((str ?? "").isEmpty)

// substring
func substring() {
    let str = "hello world"
    let index = str.index(str.startIndex, offsetBy: 5)
    print(str[..<index])
    print(str.prefix(upTo: index))
    print(str[index...])
    print(str.suffix(from: index))
    print(str.suffix(5))
}
substring()

// reverse
func reverse(_ s: String) -> String {
    var str = ""
    // for character in s.characters { // -- deprecated
    for character in s {
        str = "\(character)" + str
        print(str)
    }
    return str
}
print(reverse("hello"))

// length
print("hello".count)

// join
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
let list = cast.joined(separator: ", ")
print(list)


// etc
public func unwrap(text: String, prefix: String, suffix: String) -> String {
    return String(text[text.index(text.startIndex, offsetBy: prefix.count)..<text.index(text.endIndex, offsetBy: -suffix.count)])
}

print(unwrap(text: "<hello world>", prefix: "<", suffix: ">"))
