#!/bin/bash

for i in $(seq 1 10); do
    echo "[$i]"
done

STR="a b c"
for i in $STR; do
    echo "'$i'"
done

for i in x y z; do
    echo "'$i'"
done
