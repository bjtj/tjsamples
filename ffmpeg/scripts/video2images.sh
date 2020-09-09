#!/usr/bin/env bash

if [ -z "$2" ]
then
    echo "usage) $0 <VIDEO PATH> <FILENAME PATTERN>"
    exit 1
fi


VIDEO_PATH=$1
PATTERN=$2

ffmpeg -i "$VIDEO_PATH" -qscale:v 2 "$PATTERN"
