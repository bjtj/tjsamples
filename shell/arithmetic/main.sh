#!/bin/bash

echo $(( 2 + 1 ))

VAR1=3
echo $(( $VAR1 + 1 ))

ARR=(1 2 3)
echo $(( ${ARR[1]} + 1 ))
