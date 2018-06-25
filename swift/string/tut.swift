import Foundation

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

// split lines
let lines = "line1\nline2\nline3\n"
print(lines.components(separatedBy: "\n"))

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
