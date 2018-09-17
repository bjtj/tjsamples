// swift-tools-version:4.2
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "run-hello",
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
      // .package(url: "git@github.com:bjtj/swift-library-hello.git", from: "1.0.4"),
      .package(url: "../hello", from: "1.0.7"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "run-hello",
            dependencies: ["hello"]),
        .testTarget(
            name: "run-helloTests",
            dependencies: ["run-hello"]),
    ]
)
