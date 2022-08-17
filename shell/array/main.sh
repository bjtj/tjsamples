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

# TO ARRAY
# --------
#  - https://stackoverflow.com/a/10586169

echo "============== TO ARRAY 1 =============="
ELEMENTS="1 2 3"
IFS=', ' read -r -a array <<< "$ELEMENTS"
echo ${array[@]}
echo ${array[0]}
echo ${array[1]}
echo ${array[2]}

echo "============== TO ARRAY 2 =============="
TOARR=($ELEMENTS)
echo ${TOARR[@]}
echo ${TOARR[0]}
echo ${TOARR[1]}
echo ${TOARR[2]}

