// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "example",
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
      .package(name: "SwiftRedis", url: "https://github.com/Kitura/Kitura-redis.git", from: "2.1.1"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .executableTarget(
            name: "example",
            dependencies: ["SwiftRedis"]),
        .testTarget(
            name: "exampleTests",
            dependencies: ["example"]),
    ]
)
