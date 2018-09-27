import Foundation

func doGet() {
    let config = URLSessionConfiguration.default
    let session = URLSession(configuration: config)
    let req = URLRequest(url: URL(string: "http://example.com")!)
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
}
doGet()

sleep(1)

print("----")

func doPost() {
    let config = URLSessionConfiguration.default
    let session = URLSession(configuration: config)
    var req = URLRequest(url: URL(string: "http://httpbin.org/post")!)
    req.httpMethod = "POST"
    req.httpBody = "hello".data(using: .utf8)
    req.addValue("text/plain", forHTTPHeaderField: "Content-Type")
    
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
}
doPost()

sleep(1)

// url
// - http://www.codingexplorer.com/creating-and-modifying-nsurl-in-swift/
// let base = URL(string: "http://example.com/abc/", relativeTo: nil)
let base = URL(string: "http://example.com/abc/")
print((URL(string: "/xyz", relativeTo: base)?.absoluteString)!)
print((URL(string: "xyz", relativeTo: base)?.absoluteString)!)


print("[done]")
