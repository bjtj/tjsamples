#!/bin/bash

if [ -z $1 ]; then
    echo "ERR) no input file"
    exit 1
fi

mkdir -p out

input_file="$1"
output_file="out/$input_file"

ffmpeg -i $input_file \
       -c:v libx264 -profile:v baseline -pix_fmt yuv420p \
       -c:a aac -strict -2 \
       $output_file
