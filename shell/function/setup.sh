#!/bin/bash

function setup()
{
    A=1
    B=2
}

echo "A = $A"                   # A = 
echo "B = $B"                   # B = 

setup

echo "A = $A"                   # A = 1
echo "B = $B"                   # B = 2
