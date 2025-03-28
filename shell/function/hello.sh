#!/bin/bash

function helloworld()
{
    echo "Hello World"
}

function hello()
{
    NAME=$1
    echo "Hello $NAME"
}

declare -F

helloworld
hello "TJ"
