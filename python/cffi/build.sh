#!/bin/bash

set -e

cd libhello
mkdir build
cd build
cmake ..
make
