import XCTest

import run_helloTests

var tests = [XCTestCaseEntry]()
tests += run_helloTests.allTests()
XCTMain(tests)