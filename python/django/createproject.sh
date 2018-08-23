#!/bin/bash

NAME="mysite"
if [ -n "$1" ]; then
    NAME="$1"
fi

if [ -d "$NAME" ]; then
    echo "ERR) directory already exists" >&2
    exit 1
fi

django-admin startproject "$NAME"
