#!/bin/bash

set -e

TARGET=eth0

# https://superuser.com/a/203341
echo "== Network Interface List =="
for item in $(ifconfig | sed 's/[ \t].*//;/^$/d'); do
    echo "- $item"
done

	    
echo ""

if [ -n "$1" ]
then TARGET="$1"
fi

# https://unix.stackexchange.com/a/119271
IP=$(ifconfig $TARGET | perl -nle 's/dr:(\S+)/print $1/e')

echo "IP address of $TARGET: $IP"
