#!/bin/bash

# e.g. ./args.sh a b c

set -e

echo "ARGUMENTS: '$@'"
echo "NUMBER OF ARGUMENTS: $#"

if [ -z "$1" ]; then
    echo "[ERR] NO ARGUMENT..."
    exit 0
fi

i=0
echo "[WHILE & SHIFT]"
while [ -n "$1" ]; do
    echo "- ARG: $1"
    shift
    i=$((i+1))
    if [[ $i -eq 3 ]]
    then break
    fi
done


echo "REST ARGUMENTS: '$@'"
echo "REST NUMBER OF ARGUMENTS: $#"
