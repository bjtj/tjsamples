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


echo "= ITERATE STRING ELEMENTS ="
ELEMS="1 2 3"
for i in $ELEMS; do
    echo $i
done

echo "= INDEX STRING ELEMENTS ="
ELEMS_ARR=($ELEMS)

echo ${ELEMS_ARR[0]}
echo ${ELEMS_ARR[1]}
echo ${ELEMS_ARR[2]}
