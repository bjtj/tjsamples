#!/usr/bin/env bash

CMD="ARR=\"1 2 3\""
eval $CMD

for i in $ARR; do
    echo $i
done
