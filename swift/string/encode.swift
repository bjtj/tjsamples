import Foundation

let string = "abc def"

print(string.map { $0 })

print(Array(string).map { $0.asciiValue ?? 0 })
print(string.map { $0.asciiValue ?? 0 })

print(string.uppercased().map { $0.asciiValue ?? 0 })


print(string.replacingOccurrences(of: " ", with: "+"))

let known = "ace"
print(string.map { known.contains($0) ? "\($0)" : "%\($0.asciiValue ?? 0)" })


// https://stackoverflow.com/questions/24551816/swift-encode-url

// https://stackoverflow.com/a/24552028
let originalString = "test/test"
let escapedString = originalString.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)
print(escapedString!)


// https://stackoverflow.com/a/39490511
print(escapedString!.removingPercentEncoding!)


// https://stackoverflow.com/a/49231310
let value = "test/test"
let urlEncoded = value.addingPercentEncoding(withAllowedCharacters: .alphanumerics)
print(urlEncoded!)


