import XCTest

import multicastTests

var tests = [XCTestCaseEntry]()
tests += multicastTests.allTests()
XCTMain(tests)