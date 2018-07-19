#!/bin/bash

set -e

mkdir -p build

pushd build

cmake ..
make
# sudo make install

popd
