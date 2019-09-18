#!/bin/bash

echo "1 - $PWD"

pushd .

echo "2 - $PWD"

cd $HOME

echo "3 - $PWD"

popd

echo "4 - $PWD"
