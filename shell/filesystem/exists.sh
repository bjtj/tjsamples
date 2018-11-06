#!/bin/bash


set -v

exists_file()
{
    target="$1"
    if [ -f "$target" ]; then
	echo "$target exists"
    else
	echo "not found -- $target"
    fi
}

exists_dir()
{
    target="$1"
    if [ -d "$target" ]; then
	echo "$target exists"
    else
	echo "not found -- $target"
    fi
}

exists_file hello
touch hello
exists_file hello
rm hello
mkdir hello
exists_file hello
rm -rf hello

exists_dir hi
mkdir hi
exists_dir hi
rm -rf hi
touch hi
exists_dir hi
rm hi


touch x
if [ ! -f x ]; then
    echo "not -f x"
else
    echo "-f x"
fi

rm x

if [ ! -f x ]; then
    echo "not -f x"
else
    echo "-f x"
fi
