import NIO
import RediStack

let hostname = "127.0.0.1"

let eventLoop: EventLoop = MultiThreadedEventLoopGroup(numberOfThreads: 1).next()
let connection = try RedisConnection.make(
    configuration: try .init(hostname: hostname),
    boundEventLoop: eventLoop
).wait()

let result = try connection.set("my_key", to: "some value")
    .flatMap { return connection.get("my_key") }
    .wait()

print(result) // Optional("some value")
