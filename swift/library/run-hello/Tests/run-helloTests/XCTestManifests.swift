import XCTest

#if !os(macOS)
public func allTests() -> [XCTestCaseEntry] {
    return [
        testCase(run_helloTests.allTests),
    ]
}
#endif