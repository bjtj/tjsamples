#!/usr/bin/env bash

set -e

VAL=d

if [ -n "$1" ]
then VAL="$1"
fi

echo "VAL: $VAL"

case $VAL in
    a|A)
        echo "print A"
        ;;
    b|B)
        echo "print B"
        ;;
    *)
        echo "print *OTHER*"
        ;;
esac
