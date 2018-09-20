import Foundation

let config = URLSessionConfiguration.default
let session = URLSession(configuration: config)
let req = URLRequest(url: URL(string: "http://example.com")!)
let res: URLResponse? = nil

let task = session.dataTask(with: req) {
    (data, response, error) in
    guard error == nil else {
        print("error: \(error!)")
        return
    }

    guard let responseData = data else {
        print("error: no response data")
        return
    }

    do {
        print(responseData)
        if let str = String(data: responseData, encoding: .utf8) {
            print(str)
        } else {
            print("invalid encoding")
        }
    }
}

task.resume()

sleep(1)

print("----")


// url
// - http://www.codingexplorer.com/creating-and-modifying-nsurl-in-swift/
// let base = URL(string: "http://example.com/abc/", relativeTo: nil)
let base = URL(string: "http://example.com/abc/")
print((URL(string: "/xyz", relativeTo: base)?.absoluteString)!)
print((URL(string: "xyz", relativeTo: base)?.absoluteString)!)


print("[done]")
