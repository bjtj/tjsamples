import Foundation
import XCTest

let queue = DispatchQueue(label: "x")

func main() {

    hello()

    #if swift (>=5.5)
    print("swift 5.5")
    assert("hello" == greet5_5())
    #elseif swift(>=4.2)
    print("swift 4.2")
    assert("hello" == greet4_2())
    // greet5_5()                  // error: 'greet5_5()' is unavailable
    #endif

    // assert("hello" == async_greet()) // <-- Assertion failed
    assert("hello" == async_greet_with_sleep())
}

// -*- BAD (5.5 never called) -*-
// #if swift(>=4.2)
// func hello() {
//     print("hello swift >= 4.2")
// }
// #elseif swift(>=5.5)
// func hello() {
//     print("hello swift >= 5.5")
// }
// #endif

// -*- Correct -*-
#if swift(>=5.5)
func hello() {
    print("hello swift >= 5.5")
}

#elseif swift(>=4.2)
func hello() {
    print("hello swift >= 4.2")
}
#endif

@available(swift 4.2)
func greet4_2() -> String {
    var ret: String = ""
    queue.sync {
        ret = "hello"
    }
    return ret
}

@available(swift 5.5)
func greet5_5() -> String {
    #if swift (>=5.5)
    queue.sync {
        return "hello"
    }
    #else
    return "x"
    #endif
}

func async_greet() -> String {
    var ret: String = "x"
    print(ret)                  // x
    queue.async { // cannot convert return expression of type '()' to return type 'String'
        print("async greet() is called")
        ret = "hello"
        print(ret)              // hello
        // return "hello" // <-- error: unexpected non-void return value in void function
    }
    print(ret)                  // ? (x)
    return ret
}

func async_greet_with_sleep() -> String {
    var ret: String = "x"
    print(ret)                  // x
    queue.async {               // cannot convert return expression of type '()' to return type 'String'
        print("async greet() is called")
        ret = "hello"
        print(ret)              // hello
        // return "hello" // <-- error: unexpected non-void return value in void function
    }
    sleep(1)
    print(ret)                  // hello
    return ret
}

main()
