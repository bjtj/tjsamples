#!/usr/bin/env bash

function readenv {
    FNAME=$1
    while IFS= read -r line
    do
	KEY=$(echo $line | sed "s/=.*//g");
	if [ -z "$(printenv $KEY)" ]; then
	    eval "export $line"
	fi
    done < <(grep -vE "^(#.*|\s*)$" $FNAME | sed "s/=/=\"/;s/$/\"/g")
}
