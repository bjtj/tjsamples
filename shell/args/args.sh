#!/bin/bash

# e.g. ./args.sh a b c

set -e

echo "arguments: $@"
echo "number of arguments: $#"

if [ -z "$1" ]; then
    echo "no argument"
    exit 0
fi

echo "[shift]"
while [ -n "$1" ]; do
    echo "$1"
    shift
done
