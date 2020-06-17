#!/bin/bash

BASEDIR=$(dirname "$0")
echo "BASEDIR: $BASEDIR"

ABSBASEDIR=$(readlink -f "$BASEDIR")
echo "ABSBASEDIR: $ABSBASEDIR"

PROGRAM=`basename $0`

if [ $PROGRAM == "test" ]
then echo "TEST"
fi


# e.g.) $ NAME=John ./main.sh

if [ -z "$NAME" ]
then NAME=Steve
fi

# NAME=Steve

echo "Hello, $NAME"
