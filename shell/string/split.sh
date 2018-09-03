#!/bin/bash

# https://stackoverflow.com/a/918931

IN="a;b;c"

echo "[INPUT]"
echo "$IN"
echo ""

IFS=';' read -ra ADDR <<< "$IN"
for i in "${ADDR[@]}"; do
    # process "$i"
    echo "$i"
done


# multiple lines

read -r -d '' IN << EOM
a;b;c
d;e;f
EOM

echo "[INPUT]"
echo "$IN"
echo ""

while IFS=';' read -ra ADDR; do
    for i in "${ADDR[@]}"; do
	echo $i
    done
done <<< "$IN"
