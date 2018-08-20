#!/bin/bash

set -e

./prog.sh >.out &

wait
echo "Done"
