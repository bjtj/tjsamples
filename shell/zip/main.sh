#!/usr/bin/env bash

# https://www.geeksforgeeks.org/zip-command-in-linux-with-examples/

zip -r archive.zip dir1

rm -rf test
mkdir -p test
mv archive.zip test
cd test
unzip -l archive.zip
unzip archive.zip
