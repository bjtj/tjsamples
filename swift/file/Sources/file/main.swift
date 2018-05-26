import Foundation

let fileManager = FileManager.default;
let enumerator = fileManager.enumerator(atPath: "./");

while let element = enumerator?.nextObject() as? String {
    print(element)
}
