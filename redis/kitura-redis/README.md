# KituraRedis #

<https://github.com/Kitura/Kitura-redis>


## Example ##

```shell
$ mkdir exampleRedis && cd exampleRedis
$ swift package init --type executable
```

main.swift

```swift
import Foundation
import SwiftRedis

let redis = Redis()

redis.connect(host: "localhost", port: 6379) { (redisError: NSError?) in
    if let error = redisError {
        print(error)
    }
    else {
        print("Connected to Redis")
        // Set a key
        redis.set("Redis", value: "on Swift") { (result: Bool, redisError: NSError?) in
            if let error = redisError {
                print(error)
            }
            // Get the same key
            redis.get("Redis") { (string: RedisString?, redisError: NSError?) in
                if let error = redisError {
                    print(error)
                }
                else if let string = string?.asString {
                    print("Redis \(string)")
                }
            }
        }
    }
}
```
