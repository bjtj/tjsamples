#!/bin/bash

# e.g.) $ NAME=John ./main.sh

if [ -z "$NAME" ]
then NAME=Steve
fi

# NAME=Steve

echo "Hello, $NAME"
