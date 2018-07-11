# Kiura

* https://www.kitura.io/guides/gettingstarted.html

```
brew tap ibm-swift/kitura

brew install kitura

mkdir HelloKitura
cd HelloKitura

kitura init
```

open HelloKitura.xcodeproj

Sources/Application/Application.swift : postInit()

```
// Handle HTTP GET requests to "/"
router.get("/") { request, response, next in
    response.send("Hello, World!")
    next()
}
```

## Using Dockerfile

https://github.com/IBM-Swift/swift-ubuntu-docker

```
docker build --tag my/kitura-build -f Dockerfile-tools .

docker run -v $PWD:/root/project -w /root/project my/kitura-build /swift-utils/tools-utils.sh build release
```

```
docker run -it -p 8080:8080 -v $PWD:/root/project -w /root/project my/kitura-run sh -c ".build-ubuntu/release/my/kitura"
```
