#!/bin/bash

ARR=(1 2 3)

echo "ARR length = ${#ARR[@]}"
echo "ARR = ${ARR[@]}"

echo "= ITERATE ="
for i in ${ARR[@]}; do
    echo $i
done

echo "= INDEX ="
echo ${ARR[0]}
echo ${ARR[1]}
echo ${ARR[2]}
