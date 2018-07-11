#!/bin/bash

# https://github.com/IBM-Swift/swift-ubuntu-docker

docker build --tag my/kitura -f Dockerfile-tools .

docker run -v $PWD:/root/project -w /root/project my/kitura /swift-utils/tools-utils.sh build release
