#!/bin/bash

# return value
# - https://stackoverflow.com/a/8743103
function add()
{
    VAL1=$1
    VAL2=$2
    echo $(( $VAL1+$VAL2 ))
}
