#!/bin/bash

# https://stackoverflow.com/a/20573405

read -r -d '' IN << EOM
hello world
bye bye
EOM

while read line; do
    echo "$line"
done <<< "$IN"

