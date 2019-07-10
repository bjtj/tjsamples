#!/bin/bash

# set -e # stop on fail

echo "\$(dirname \$0): '"$(dirname $0)"'"

check_if_set()
{
    # check if set
    # - https://stackoverflow.com/a/13864829/5676460
    if [ -z ${VAR+x} ]; then
	echo "VAR is unset"
    else
	echo "VAR is set to '$VAR'";
    fi
}

VAR=hello world # fail
echo "\$VAR = '$VAR'"

check_if_set

VAR="hello world"
echo "\$VAR = '$VAR'"

check_if_set
