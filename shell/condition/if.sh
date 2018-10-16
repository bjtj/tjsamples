#!/bin/bash

if [ -n $1 ] && [ "$1" == "opt" ]; then
	echo "$1 is recognized"
else
	echo "$1 is not recognized"
fi

case $1 in
	a|b|c)
		echo "\`$1\` in a or b or c"
		;;
	*)
		echo "no match"
		;;
esac

echo "done"
