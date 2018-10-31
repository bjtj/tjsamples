#!/bin/bash

# https://stackoverflow.com/a/965072/5676460

filename=$(basename -- "a/b/c/file.mp3")
extension="${filename##*.}"
name="${filename%.*}"

echo "$filename"
echo "$extension"
echo "$name"
echo "${filename##*/}"
