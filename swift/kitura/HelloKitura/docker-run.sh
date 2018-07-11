#!/bin/bash

# https://github.com/IBM-Swift/swift-ubuntu-docker

docker run -it -p 8080:8080 -v $PWD:/root/project -w /root/project my/kitura sh -c ".build-ubuntu/release/HelloKitura"
