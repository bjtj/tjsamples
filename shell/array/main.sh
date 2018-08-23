#!/bin/bash

ARR=(1 2 3)

echo "---"
for i in ${ARR[@]}; do
    echo $i
done

echo "---"
echo ${ARR[0]}
echo ${ARR[1]}
echo ${ARR[2]}
