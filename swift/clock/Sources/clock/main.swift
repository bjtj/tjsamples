import Foundation

// 
var time = clock()

print("time: \(time)")

sleep(1)

print("time: \(clock() - time)")

//
let t = DispatchTime.now()
print("\(t)")

sleep(1)

print("\((DispatchTime.now().uptimeNanoseconds - t.uptimeNanoseconds) / 1_000_000)")

//

let formatter = DateFormatter()
formatter.dateFormat = "yyyy-MM-dd HH:mm:ss.SSS"

print(formatter.string(from: Date()))
