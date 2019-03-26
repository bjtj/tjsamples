#!/bin/bash

# https://stackoverflow.com/a/965072/5676460

function last {
    x=""
    while [ -n "$1" ]; do
	x="$1"
	shift
    done
    echo "$x"
}

filename=$(basename -- "a/b/c/file.mp3")
extension="${filename##*.}"
name="${filename%.*}"

echo "$filename"
echo "$extension"
echo "$name"
echo "${filename##*/}"

echo "-*- dirname -*-"
echo $(dirname "/a/b/c/file")
echo $(dirname -z "/a/b/c/file")
echo $(dirname "/a/b/c/file" "/e/f/g")
echo $(dirname -z "/a/b/c/file" "/e/f/g")

echo "-*- last dirname -*-"
filepath="/a/b/c/file"
TOKENS=$(sed s:/:' ':g <<< $(dirname $filepath))
RET=$(last $TOKENS)
echo "last -- '$RET' ($filepath)"
