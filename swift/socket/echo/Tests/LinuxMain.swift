import XCTest

import echoTests

var tests = [XCTestCaseEntry]()
tests += echoTests.allTests()
XCTMain(tests)
