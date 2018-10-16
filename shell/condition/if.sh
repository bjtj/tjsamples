#!/bin/bash

if [ -n $1 ] && [ "$1" == "opt" ]; then
	echo "$1 is recognized"
else
	echo "$1 is not recognized"
fi

echo "done"
