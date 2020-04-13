#!/usr/bin/env bash

# https://stackoverflow.com/a/16391221

entry="$0"
if [ ! -z $1 ]
then entry=$1
fi

echo "entry: $entry"
echo $(stat -c %y "$entry")

mtime=$(stat -c %Y "$entry")

echo "mtime: $mtime"

now=$(date +%s)

echo "  now: $now"

echo $(( (now - mtime) )) seconds
echo $(( (now - mtime) / 86400 )) days

test=$(( (now - mtime) > 10 ))

if [ $test == "0" ]
then echo "x"
else echo "y"
fi
