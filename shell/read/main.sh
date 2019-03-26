#!/bin/bash

# https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/

if [ -z "$1" ]
then
    echo "USAGE) ./$(basename $0) <input file>"
    exit 1
fi


input="$1"

if [ ! -f "$input" ]
then
    echo "ERR) no file found -- '$input'"
    exit 1
fi


while IFS= read -r var
do
  echo "$var"
done < "$input"
