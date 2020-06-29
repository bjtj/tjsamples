#!/usr/bin/env bash

X=hello
X+=world
echo $X

X="$X !!!"
echo $X
