# Welcome to Swift.org #

<https://www.swift.org/>



# Getting Started #

<https://www.swift.org/getting-started/>



# Swift Package Manager #

<https://github.com/apple/swift-package-manager/blob/master/Documentation/Usage.md>


## Initialize Project ##

Executable (binary)

```bash
$ swift package init --type executable
```

Swift Library project

```bash
$ swift package init --type library
```


## Build ##

```bash
$ swift build
```


## Run ##

```bash
$ swift run
```


## Test ##

```bash
$ swift test
```


## Swift Package Manager (package.swift) ##

<https://swift.org/package-manager/>



# Docker #

<https://www.swift.org/download/#docker>


```bash
docker pull swift
```

## Tip ##

e.g.) run a swift file (main.swift) on $PWD

```bash
$ docker run -t --rm -v $PWD:/workspace -w /workspace swift:5.5 swift main.swift
```
